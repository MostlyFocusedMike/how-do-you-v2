const handler = (router) => {
    // TODO: add actual user login validation
    router.delete(
        '/api/v1/answers/:answerId',
        async (req, res) => {
            const { Answer } = req.models;
            Answer.delete(req.params.answerId);
            res.sendStatus(204);
        },
    );
};

module.exports = handler;
