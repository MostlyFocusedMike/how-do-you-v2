module.exports = (req, res, next) => {
    if(req.isAuthenticated()) {
        console.log('User is authenticated');
        next();
    } else {
        res.redirect('/');
    }
};
