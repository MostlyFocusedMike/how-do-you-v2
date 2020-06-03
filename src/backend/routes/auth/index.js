const express = require('express');
const router = express.Router();

// routes
require('./home')(router);
require('./auth-required')(router);
require('./logout')(router);
require('./get-login')(router);
require('./post-login')(router);
require('./get-sign-up')(router);
require('./post-sign-up')(router);

module.exports = router;