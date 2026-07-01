const path = require('path');

exports.landingPage = async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/index.html'));
};

exports.signup = async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/signup.html'));
};

exports.login = async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/login.html'));
};

exports.app = async (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/HTML/app.html'));
};
