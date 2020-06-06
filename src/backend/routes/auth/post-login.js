const passport = require('passport');

const handler = (router) => {
    router.post('/api/v1/login', (req, res, next) => {
        console.log('Inside POST /custom-login');

        const authFunc = (err, user, info) => {
            console.log('Inside passport.authenticate() callback');
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
            console.log(`req.user outside: ${JSON.stringify(user)}`);
            if (err) res.json({ err: 'Something just went wrong' })
            if (!user) return res.status(401).json({ err: 'Could not log in' });
            req.logIn(user, (err) => {
                console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
                return res.json({msg: `user: ${JSON.stringify(user)} was logged in`});
            });
        };
        passport.authenticate('local', authFunc)(req, res, next);
    });
}

module.exports = handler;

