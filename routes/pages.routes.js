const express = require('express');
const pagesController = require('../controller/pages.controller');
const authController = require('../controller/auth.controller');
const notesController = require('../controller/notes.controller');

const router = express.Router();

router.route('/').get(pagesController.landingPage);
router.route('/app').get(authController.protect, pagesController.app);

router.get('/signup', pagesController.signup);
router.get('/login', pagesController.login);

module.exports = router;
