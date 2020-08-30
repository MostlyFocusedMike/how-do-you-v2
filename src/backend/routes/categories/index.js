const express = require('express');

const router = express.Router();

// middleware must be registered BEFORE routes
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

// routes
require('./list')(router);
require('./list-questions-by-category')(router);

module.exports = router;
