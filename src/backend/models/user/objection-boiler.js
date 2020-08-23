const Path = require('path');
const { Model } = require('objection');
const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                email: { type: 'string' },
                role: { type: 'string' },
                password: { type: 'string' },
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
            },
        };
    }

    static get relationMappings() {
        return {
            articles: {
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, '..', 'article'),
                join: {
                    from: 'users.id',
                    to: 'articles.user_id',
                },
            },
        };
    }

    get includedProperties() {
        return ['id', 'email', 'role'];
    }
}

module.exports = ObjectionBoiler;
