const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUserById)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;
