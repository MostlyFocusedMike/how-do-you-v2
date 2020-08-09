module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated');
        next();
    } else {
        res.status(401).send({ err: 'Not Authenticated' });
    }
};
