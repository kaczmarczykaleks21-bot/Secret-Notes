const express = require('express');

const userRouter = require('./routes/user.routes');
const notesRouter = require('./routes/notes.routes');
const pagesRouter = require('./routes/pages.routes');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/secretnotes', pagesRouter);

app.get('/', (req, res) => {
  res.redirect('/secretnotes');
});

app.use('/api/v1/notes', notesRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
