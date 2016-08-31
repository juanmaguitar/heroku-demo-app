const express = require('express');

const addUser = require('./handlers/addUser')
const getAll = require('./handlers/getAll');

let router = express.Router();

router.route('/')
  .post( addUser )
  .get( getAll )

module.exports = router;
