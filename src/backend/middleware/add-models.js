const User = require('../models/user');
const Category = require('../models/category');
const Question = require('../models/question');
const Answer = require('../models/answer');
const Language = require('../models/language');

module.exports = (req, res, next) => {
    req.models = {
        User,
        Category,
        Question,
        Answer,
        Language,
    };
    next();
};
