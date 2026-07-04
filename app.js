const express = require('express');

const userRouter = require('./routes/user.routes');
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
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
