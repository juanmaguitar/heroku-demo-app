const express = require('express');
const usersRoutes = require('./routes/users');

const app = express();
app.use('/users', usersRoutes)

module.exports = app;
