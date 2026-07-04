const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true,
    trim: true,
    maxlength: [20, 'A username must have less or equal then 20 characters'],
    minlenght: [10, 'A username must have more or equal then 10 characters'],
  },

  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: [true, 'This email is already taken'],
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
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
    select: false,
  },

  passwordChangedAt: { type: Date },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
