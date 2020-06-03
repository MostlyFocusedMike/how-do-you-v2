const passport = require('passport');

const handler = (router) => {
    router.post('/log-in', (req, res, next) => {
        console.log('Inside POST /log-in callback');
        passport.authenticate(
            'local',
            {
                successRedirect: '/auth-required',
                failureRedirect: '/log-in',
                failureFlash: true,
            },
        )(req, res, next);
    });
}

module.exports = handler;

