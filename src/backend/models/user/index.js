const ObjectionBoiler = require('./objection-boiler');

class User extends ObjectionBoiler {
    static async find(id) {
        const user = await this.query().findById(id);
        delete user.password;
        return user;
    }
}

module.exports = User;
