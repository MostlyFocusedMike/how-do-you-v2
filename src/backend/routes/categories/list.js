const handler = (router) => {
    router.get(
        '/api/v1/categories',
        (req, res) => {
            req.models.Category
                .all()
                .then(categories => {
                    res.send(categories);
                });
        },
    );
};

module.exports = handler;
