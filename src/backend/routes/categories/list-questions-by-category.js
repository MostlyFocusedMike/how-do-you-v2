const handler = (router) => {
    router.get(
        '/api/v1/categories/:categoryId/questions',
        async (req, res) => {
            const { models: { Question }, params: { categoryId } } = req;
            const questions = await Question.getAllQuestionsFromCategory(categoryId);
            res.camel(questions);
        },
    );
};

module.exports = handler;
