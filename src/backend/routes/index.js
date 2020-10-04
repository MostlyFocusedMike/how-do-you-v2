/**
 * Add all each router and their routes to an app at once
 * @param {object} app - an Express app
 */
const addStatic = require('./static');

const addAllRoutes = (app) => {
    addStatic(app);
    app.use(require('../middleware/add-models'));
    app.use(require('../middleware/add-camelize'));
    app.use(require('./users'));
    app.use(require('./categories'));
    app.use(require('./languages'));
    app.use(require('./questions'));
    app.use(require('./auth'));
};

module.exports = addAllRoutes;
