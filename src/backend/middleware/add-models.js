const User = require('../models/user');
const Category = require('../models/category');

module.exports = (req, res, next) => {
    req.models = {
        User,
        Category,
    };
    next();
};
