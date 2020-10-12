const ObjectionBoiler = require('./objection-boiler');

class Question extends ObjectionBoiler {
    static getAllQuestionsFromCategory(category_id) {
        return this
            .query()
            .where({ category_id: category_id })
            .withGraphFetched('answers');
    }

    static getAllAnswersForQuestion(question_id) {
        return this
            .query()
            .where({ id: question_id })
            .withGraphFetched('answers');
    }
}

module.exports = Question;
