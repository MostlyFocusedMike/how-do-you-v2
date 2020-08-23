const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../../models/user');

const handler = (router) => {
    router.post('/sign-up', async (req, res, next) => {
        console.log('Inside POST /sign-up');
        const { email, password } = req.body;
        console.log('req.body: ', req.body);
        if (!password || !email) res.send('Please enter an email and password');

        const hashedAndSaltedPassword = await bcrypt.hash(password, 8);
        const thing = await User.create({ email, password: hashedAndSaltedPassword });
        console.log('thing: ', thing);
        return passport.authenticate(
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
