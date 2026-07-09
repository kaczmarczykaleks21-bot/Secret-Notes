const express = require('express');
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getAllUsers,
  )
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    userController.createUser,
  );

router
  .route('/:id')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    userController.getUserById,
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    userController.updateUser,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    userController.deleteUser,
  );

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);

module.exports = router;
