const handler = (router) => {
    router.get(
        '/api/v1/questions/:question_id',
        async (req, res) => {
            const { Question } = req.models;
            const questions = await Question.getAllAnswersForQuestion(req.params.question_id);

            res.json(questions);
        },
    );
};

module.exports = handler;
