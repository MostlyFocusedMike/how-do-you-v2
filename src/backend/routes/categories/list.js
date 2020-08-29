const handler = (router) => {
    router.get(
        '/api/v1/categories',
        async (req, res) => {
            const { Category } = req.models;
            const categories = await Category.all();
            res.json(categories);
        },
    );
};

module.exports = handler;
