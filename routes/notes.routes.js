const express = require('express');
const authController = require('../controller/auth.controller');
const notesController = require('../controller/notes.controller');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, notesController.getAllNotes)
  .post(authController.protect, notesController.createNote);

router
  .route('/:id')
  .get(authController.protect, notesController.getNoteById)
  .patch(authController.protect, notesController.updateNote)
  .delete(authController.protect, notesController.deleteNote);

module.exports = router;
