const ObjectionBoiler = require('./objection-boiler');

class User extends ObjectionBoiler {
    static async find(id) {
        const user = await this.query().findById(id);
        if (user && user.password) delete user.password;
        return user;
    }
}

module.exports = User;
