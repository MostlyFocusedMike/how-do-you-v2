const express = require('express');

const router = express.Router();

// routes
require('./post-logout')(router);
require('./post-login')(router);
require('./post-sign-up')(router);
require('./get-reauth')(router);

module.exports = router;
