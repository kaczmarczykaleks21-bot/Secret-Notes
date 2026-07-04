const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');

const router = express.Router();

router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

module.exports = router;
