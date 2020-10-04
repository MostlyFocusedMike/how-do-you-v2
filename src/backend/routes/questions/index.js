const express = require('express');

const router = express.Router();

// routes
require('./getWithAnswers')(router);
require('./list')(router);

module.exports = router;
