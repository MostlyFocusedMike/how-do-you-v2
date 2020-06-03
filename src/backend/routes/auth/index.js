const express = require('express');
const router = express.Router();

// routes
require('./home')(router);
require('./auth-required')(router);

module.exports = router;