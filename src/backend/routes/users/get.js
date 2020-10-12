const checkIfAuthenticatedMiddleware = require('../../middleware/check-authenticated');

const userHandler = (router) => {
    router.get(
        '/api/v1/users/:id',
        checkIfAuthenticatedMiddleware,
        // checkIfAuthorizedMiddleware(),
        (req, res) => {
            const userId = req.params.id;
            console.log(`/users/${userId} hit!`);
            console.log('req.session: ', req.session);
            req.models.User
                .find(userId)
                .then(user => {
                    console.log('user.sanitize(): ', user.sanitized());
                    res.json(user.sanitized());
                });
        },
    );
};

module.exports = userHandler;
