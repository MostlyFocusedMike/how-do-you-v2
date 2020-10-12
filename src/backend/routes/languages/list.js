const handler = (router) => {
    router.get(
        '/api/v1/languages',
        async (req, res) => {
            const { Language } = req.models;
            const languages = await Language.all();
            res.json(languages);
        },
    );
};

module.exports = handler;
