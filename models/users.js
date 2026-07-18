const crypto = require('crypto');
const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: [true, 'This username is already taken!'],
    trim: true,
    maxlength: [16, 'A username must have less or equal then 16 characters'],
    minlenght: [6, 'A username must have more or equal then 6 characters'],
  },

  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: [true, 'This email is already taken!'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },

  roles: {
    type: String,
    enum: ['user', 'pro', 'admin'],
    default: 'user',
  },

  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlenght: [8, 'Password has to contain at least 8 characters'],
    select: false,
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
    select: false,
  },

  passwordChangedAt: { type: Date },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

// ENCRYPTING PASSWORD - MIDDLEWARE
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return; // If password was modified then run function, otherwise skip

  this.password = await bcrypt.hash(this.password, 12); // Hashing password with cost of 12
  this.passwordConfirm = undefined; // Delete password confirm field
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return; // If password was modified then run function, otherwise skip

  this.passwordChangedAt = Date.now() - 1000; // adding -1000 so that there is no bugs with token being created before
});

// CHECKING WHETHER PASSWORD WAS MODIFIED
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  return false; // False -> NOT changed
};

// CREATING RESET TOKEN
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
