const passport = require('passport');

const handler = (router) => {
    router.post('/api/v1/login', (req, res, next) => {
        console.log('Inside POST /login');
        console.log('passport: ', passport);
        const authFunc = (err, user, info) => {
            console.log('Inside passport.authenticate() callback');
            if (err) res.json({ err: 'Something just went wrong' });
            if (!user) return res.status(401).json({ err: 'Could not log in' });
            req.logIn(user, (err2) => {
                console.log('user: ', user);
                console.log('req.user inside: ', req.user);
                console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
                return res.json({ id: user.id, email: user.email, role: user.role });
            });
        };
        passport.authenticate('local', authFunc)(req, res, next);
    });
};

module.exports = handler;
