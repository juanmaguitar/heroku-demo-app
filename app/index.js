const express = require('express');
const usersRoutes = require('./routes/users');

require('dotenv').config();

const app = express();
app.use('/users', usersRoutes)

module.exports = app;