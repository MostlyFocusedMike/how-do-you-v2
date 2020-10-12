const handler = (router) => {
    router.get(
        '/api/v1/categories/:category_id/questions',
        async (req, res) => {
            const { models: { Question }, params: { category_id } } = req;
            const questions = await Question.getAllQuestionsFromCategory(category_id);
            res.json(questions);
        },
    );
};

module.exports = handler;
