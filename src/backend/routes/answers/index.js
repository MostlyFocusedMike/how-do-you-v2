const express = require('express');

const router = express.Router();

// routes
require('./delete')(router);

module.exports = router;
