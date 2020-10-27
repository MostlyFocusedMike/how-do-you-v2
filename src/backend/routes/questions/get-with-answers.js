const handler = (router) => {
    router.get(
        '/api/v1/questions/:questionId',
        async (req, res) => {
            const { Question } = req.models;
            const questions = await Question.getAllAnswersForQuestion(req.params.questionId);

            res.json(questions);
        },
    );
};

module.exports = handler;
