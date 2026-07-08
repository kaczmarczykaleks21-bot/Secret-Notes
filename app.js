const express = require('express');

const usersRouter = require('./routes/users.routes');
const notesRouter = require('./routes/notes.routes');
const pagesRouter = require('./routes/pages.routes');
const globalErrorHandler = require('./controller/error.controller');
const AppError = require('./utils/appError');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Routes
app.use('/secretnotes', pagesRouter);

app.get('/', (req, res) => {
  res.redirect('/secretnotes');
});

app.use('/api/v1/notes', notesRouter);
app.use('/api/v1/users', usersRouter);

app.all('/{*splat}', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
