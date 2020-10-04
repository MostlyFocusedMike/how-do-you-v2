const ObjectionBoiler = require('./objection-boiler');

class Question extends ObjectionBoiler {
    static getAllQuestionsFromCategory(categoryId) {
        return this
            .query()
            .where({ category_id: categoryId })
            .withGraphFetched('answers');
    }

    static getAllAnswersForQuestion(questionId) {
        return this
            .query()
            .where({ id: questionId })
            .withGraphFetched('answers');
    }
}

module.exports = Question;
