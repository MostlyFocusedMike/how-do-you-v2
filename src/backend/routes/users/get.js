const checkIfAuthenticatedMiddleware = require('../../middleware/check-auth');

const userHandler = (router) => {
    router.get('/api/users/:id',  checkIfAuthenticatedMiddleware, (req, res) => {
        const userId = req.params.id;
        console.log(`/users/${userId} hit!`);
        res.send({ id: userId, msg: `user ${userId} would go here.` });
    });
};

module.exports = userHandler;