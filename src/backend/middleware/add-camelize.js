const Camelize = require('camelize');
const camelize = require('camelize');

module.exports = (req, res, next) => {
    res.camel = (json) => {
        res.send(camelize(json));
    };
    next();
};
