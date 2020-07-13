// check if user is allowed to see a page
module.exports = async (req, res, next) => {
    console.log('req.user: ', req.user);
    console.log('req.models.User.find(2): ', await req.models.User.find(2));
    next();
};
