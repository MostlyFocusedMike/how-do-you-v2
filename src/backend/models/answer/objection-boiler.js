const Path = require('path');
const { Model } = require('objection');
const Base = require('../base');

class ObjectionBoiler extends Base {
    static get tableName() {
        return 'answers';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                language_id: { type: 'integer' },
                question_id: { type: 'integer' },
                code: { type: 'string' },
                text: { type: 'string' },
                created_at: { type: 'date' },
                updated_at: { type: 'date' },
            },
        };
    }

    static get relationMappings() {
        return {
            question: {
                relation: Model.HasOneRelation,
                modelClass: Path.join(__dirname, '..', 'question'),
                join: {
                    from: 'answers.question_id',
                    to: 'questions.id',
                },
            },
            language: {
                relation: Model.HasOneRelation,
                modelClass: Path.join(__dirname, '..', 'language'),
                join: {
                    from: 'answers.language_id',
                    to: 'languages.id',
                },
            },
        };
    }
}

module.exports = ObjectionBoiler;
