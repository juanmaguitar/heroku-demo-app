const express = require('express');
const getAll = require('./handlers/getAll');

let router = express.Router();

router.get('/', getAll );

module.exports = router;
