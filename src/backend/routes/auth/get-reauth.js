const checkIfAuthenticatedMiddleware = require('../../middleware/check-authenticated');

const handlerCallback = (req, res) => {
    console.log('Inside get /reauth');
    const { id, email, role } = req.user; // req.user comes from passport
    res.send({ id, email, role });
};

const handler = (router) => {
    router.get('/api/v1/reauth', checkIfAuthenticatedMiddleware, handlerCallback);
};

module.exports = handler;
