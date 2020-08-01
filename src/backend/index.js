const path = require('path');
const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require('../../webpack.config');

const compiler = webpack(webpackConfig);

const addAllRoutes = require('./routes');
const addAuth = require('./authentication');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

addAuth(app);

if (process.env.NODE_ENV !== 'production') {
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        writeToDisk: true, // we need this for refreshing the front end url
    }));

    app.use(require('webpack-hot-middleware')(compiler));
} else {
    const staticFiles = express.static(path.join(__dirname, '..', '..', 'build'));
    app.use(staticFiles);
}

// catchall
app.get('*', (req, res, next) => {
    if (req.originalUrl.includes('/api')) return next();
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'))
})

addAllRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port 'http://localhost:${port}!`);
});
