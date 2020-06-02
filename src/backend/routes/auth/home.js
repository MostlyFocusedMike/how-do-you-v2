const userHandler = (router) => {
    router.get('/', (req, res) => {
        console.log('req.session.views: ', req.session.views);
        // req.session is where you store any info you want
        if (req.session.views) {
            req.session.views++;
        } else {
            req.session.views = 1;
        }
        res.send(`
            <h1>You hit home page!</h1>
            <a href="/sign-up">Sign up!</a>
            <a href="/log-in">Log in!</a>
        `);
    });
};

module.exports = userHandler;