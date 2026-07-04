const path = require('path');
const catchAsync = require('../utils/catchAsync');

exports.landingPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/index.html'));
};

exports.signup = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/signup.html'));
};

exports.login = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/login.html'));
};

exports.app = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/app.html'));
};
