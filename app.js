const express = require('express');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

const usersRouter = require('./routes/users.routes');
const notesRouter = require('./routes/notes.routes');
const pagesRouter = require('./routes/pages.routes');
const globalErrorHandler = require('./controller/error.controller');
const AppError = require('./utils/appError');

const app = express();

// Set security headers
app.use(helmet());

//  Limit number of requests from same api
const globalLimiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour!',
});

const authLimiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, Please try again in an hour!',
});

app.use('/api', globalLimiter);
app.use('/api/v1/users/signup', authLimiter);
app.use('/api/v1/users/login', authLimiter);

// Cookies
app.use(cookieParser());

// Body parser => reading data from the body into req.body
app.use(
  express.json({
    limit: '10kb',
  }),
);
// Serving static files
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
