const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
    trim: true,
    maxlength: [20, 'A user must have less or equal then 20 characters'],
    minlenght: [10, 'A user must have more or equal then 10 characters'],
  },

  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: [true, 'This email is already taken'],
  },

  role: {
    type: String,
    enum: ['user', 'userPro', 'admin'],
    default: 'user',
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    minlenght: [8, 'Password has to contain at least 8 characters'],
  },

  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
  },

  passwordChangedAt: { type: Date },
});
