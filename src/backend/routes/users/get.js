const checkIfAuthenticatedMiddleware = require('../../middleware/check-authenticated');
const checkIfAuthorizedMiddleware = require('../../middleware/check-authorized');

const userHandler = (router) => {
    router.get(
        '/api/users/:id',
        checkIfAuthenticatedMiddleware,
        checkIfAuthorizedMiddleware,
        (req, res) => {
            const userId = req.params.id;
            console.log(`/users/${userId} hit!`);
            res.send({ id: userId, msg: `user ${userId} would go here.` });
        }
    );
};

module.exports = userHandler;