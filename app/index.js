const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRoutes)

module.exports = app;
