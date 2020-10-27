const ObjectionBoiler = require('./objection-boiler');

class Question extends ObjectionBoiler {
    static getAllQuestionsFromCategory(categoryId) {
        return this
            .query()
            .where({ category_id: categoryId })
            .withGraphFetched('answers');
    }

    static getAllAnswersForQuestion(question_id) {
        return this
            .query()
            .where({ id: question_id })
            .withGraphFetched('answers')
            .first();
    }
}

module.exports = Question;
