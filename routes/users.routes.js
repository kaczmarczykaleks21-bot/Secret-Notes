const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;
