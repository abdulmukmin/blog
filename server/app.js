const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index_route.js');
const usersRouter = require('./routes/users_route.js');
const articleRouter = require('./routes/article_route.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://mumin:mumin1@ds111244.mlab.com:11244/test-poll_tutorpoint', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`database connected!`)
});

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articleRouter);

module.exports = app;
