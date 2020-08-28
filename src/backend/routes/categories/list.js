const handler = (router) => {
    router.get(
        '/api/v1/categories',
        async (req, res) => {
            const categories = await req.models.Category.all();
            const promises = categories.map(category => category.relations('questions'));
            const questions = await Promise.all(promises);
            if (req.query.questions) {
                for (let i = 0; i < categories.length; i++) {
                    categories[i].questions = questions[i];
                }
            }
            res.send(categories);
        },
    );
};

module.exports = handler;
