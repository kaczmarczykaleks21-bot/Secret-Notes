const User = require('../models/users');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUserById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

exports.createUser = async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  res.status(201).json({
    status: 'success',
    message: 'User has been successfully created',
    data: {
      newUser,
    },
  });
};

exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'User has been succcessfully updated!',
    data: {
      user,
    },
  });
});

exports.deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    message: 'User has been successfully deleted!',
    data: {},
  });
});
