const mongoose = requrie('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title!'],
  },
  content: {
    type: String,
  },
  tags: {
    enum: ['favourite', 'private', 'no-tags'],
    default: 'no-tags',
  },
  priority: {
    enum: [1, 2, 3, 4, 5],
    default: 3,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is reference is required!'],
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
