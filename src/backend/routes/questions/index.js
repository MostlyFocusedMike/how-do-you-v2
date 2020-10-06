const express = require('express');

const router = express.Router();

// routes
require('./get-with-answers')(router);
require('./list')(router);
require('./create-with-questions')(router);

module.exports = router;
