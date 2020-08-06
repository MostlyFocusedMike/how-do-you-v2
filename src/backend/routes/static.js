const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const webpackConfig = require('../../../webpack.config');


const addStatic = (app) => {
    const compiler = webpack(webpackConfig);

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
        console.log('req.originalUrl: ', req.originalUrl);
        return res.sendFile(path.join(__dirname, '..', '..', '..', 'build', 'index.html'));
    });
};

module.exports = addStatic;
