/**
 * Add all each router and their routes to an app at once
 * @param {object} app - an Express app
 */
const addAllRoutes = (app) => {
    app.use(require('../middleware/add-models'));
    app.use(require('./users'));
    app.use(require('./auth'));
};

module.exports = addAllRoutes;
