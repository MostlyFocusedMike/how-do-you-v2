const express = require('express');

const router = express.Router();

// routes
require('./post-logout')(router);
require('./post-login')(router);
require('./post-sign-up')(router);

module.exports = router;
