const express = require('express');
const pagesController = require('../controller/pages.controller');
const authController = require('../controller/auth.controller');
const notesController = require('../controller/notes.controller');

const router = express.Router();

router.route('/').get(pagesController.landingPage);
router.route('/app').get(pagesController.app);

router.route('/auth/signup').get(pagesController.signup);
router.route('/auth/login').get(pagesController.login);

module.exports = router;
