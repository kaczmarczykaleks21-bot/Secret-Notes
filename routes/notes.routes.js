const express = require('express');
const authController = require('../controller/auth.controller');
const notesController = require('../controller/notes.controller');

const router = express.Router();

router
  .route('/')
  .get(notesController.getAllNotes)
  .post(notesController.createNote);

router
  .route('/:id')
  .get(notesController.getNoteById)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
