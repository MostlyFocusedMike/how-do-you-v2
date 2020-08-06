const express = require('express');

const addAllRoutes = require('./routes');
const addAuth = require('./authentication');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

addAuth(app);
addAllRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port 'http://localhost:${port}!`);
});
