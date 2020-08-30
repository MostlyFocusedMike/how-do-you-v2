const express = require('express');

const router = express.Router();

// routes
require('./list')(router);

module.exports = router;
