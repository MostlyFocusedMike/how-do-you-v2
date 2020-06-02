const express = require('express');

const router = express.Router();

// routes
require('./home')(router);

module.exports = router;