const checkIfAuthenticatedMiddleware = require('../../middleware/check-authenticated');
const checkIfAuthorizedMiddleware = require('../../middleware/check-permissions');

const userHandler = (router) => {
    router.get(
        '/api/v1/users/:id',
        // checkIfAuthenticatedMiddleware,
        // checkIfAuthorizedMiddleware(),
        (req, res) => {
            const userId = req.params.id;
            console.log(`/users/${userId} hit!`);
            req.models.User
                .find(userId)
                .then(user => {
                    res.send(user);
                })
        }
    );
};

module.exports = userHandler;