const handler = (router) => {
    router.post(
        '/api/v1/questions',
        async (req, res) => {
            const { Question } = req.models;
            const questions = await Question.createWithRelations(req.body);
            res.send(questions);
        },
    );
};

module.exports = handler;
