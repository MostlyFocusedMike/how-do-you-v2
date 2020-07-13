// check if user is allowed to see a page
module.exports = async (...permissions) => {
    return (req, res, next) => {
        const authenticatedUser = req.user.id
        console.log('req.user: ', req.user);
        req.models.User.find(2).then(console.log)

        if (authenticatedUser !== authorizedUserId) {
            return res.status(401).send({ authorized: false });
        }
    }
};
