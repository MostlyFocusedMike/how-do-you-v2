const Path = require('path');
const { Model } = require('objection');
const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'languages';
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
            answers: {
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, '..', 'answer'),
                join: {
                    from: 'languages.id',
                    to: 'answers.language_id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
