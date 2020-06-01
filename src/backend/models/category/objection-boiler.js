const Path = require('path');
const { Model } = require('objection');
const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'categories';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
            },
        };
    }

    static get relationMappings() {
        return {
            questions: {
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, '..', 'question'),
                join: {
                    from: 'categories.id',
                    to: 'questions.category_id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
