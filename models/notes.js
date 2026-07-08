const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title!'],
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: String,
    enum: ['favourite', 'private', 'no-tags'],
    default: 'no-tags',
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 3,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required!'],
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
