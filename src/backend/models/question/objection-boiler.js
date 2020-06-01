const Path = require('path');
const { Model } = require('objection');
const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'questions';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                category_id: { type: 'integer' },
                content: { type: 'string' },
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
                    from: 'questions.id',
                    to: 'answers.question_id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
