const checkIfAuthenticatedMiddleware = require('../../middleware/check-auth');

const handler = (router) => {
    router.get('/auth-required', checkIfAuthenticatedMiddleware, (req, res) => {
        console.log('in /auth-required: ');
        const sessionData = JSON.stringify({
            reqSession: req.session,
            reqUser: req.user,
            passport: req.session.passport,
            isUserAuthenticated: req.isAuthenticated(),
        }, null, 2);

        res.send(`
        <h1>You're in!</h1>
        <pre>${sessionData}</pre>
        <form method="POST" action="/logout">
            <button>Logout</button>
        </form>
        `);
    });
}

module.exports = handler;
