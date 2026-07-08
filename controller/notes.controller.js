const Note = require('../models/notes');
const User = require('../models/users');
const catchAsync = require('../utils/catchAsync');

exports.getAllNotes = catchAsync(async (req, res, next) => {
  const notes = await Note.find();

  res.status(200).json({
    status: 'success',
    results: notes.length,
    data: {
      notes,
    },
  });
});

exports.getNoteById = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const note = await Note.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      note,
    },
  });
});

exports.createNote = catchAsync(async (req, res, next) => {
  const newNote = await Note.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newNote,
    },
  });
});

exports.updateNote = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const note = await Note.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    message: 'Data has been successfully updated!',
    data: { newNote },
  });
});

exports.deleteNote = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const deleteNote = await Note.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    message: 'Data has been successfully deleted!',
    data: { deleteNote },
  });
});
