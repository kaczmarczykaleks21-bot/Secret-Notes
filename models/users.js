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
    maxlength: [20, 'A username must have less or equal then 20 characters'],
    minlenght: [10, 'A username must have more or equal then 10 characters'],
  },

  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: [true, 'This email is already taken!'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },

  role: {
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
});

// ENCRYPTING PASSWORD - MIDDLEWARE
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // If password was modified then run function, otherwise skip

  this.password = await bcrypt.hash(this.password, 12); // Hashing password with cost of 12
  this.passwordConfirm = undefined; // Delete password confirm field
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = async function (JWTTimestamp) {
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

const User = mongoose.model('User', userSchema);

module.exports = User;
