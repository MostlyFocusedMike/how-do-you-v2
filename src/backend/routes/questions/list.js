const handler = (router) => {
    router.get(
        '/api/v1/questions/',
        async (req, res) => {
            const { Question } = req.models;
            const questions = await Question.all();
            res.camel(questions);
        },
    );
};

module.exports = handler;
