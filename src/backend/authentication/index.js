const uuid = require('uuid');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

const addAuth = (app) => {
    passport.use(new LocalStrategy(
        { usernameField: 'email' },
        async (email, password, done) => {
            const dbUser = await User.findBy('email', email);
            if (!dbUser) return done(null, false, { message: 'no User\n' });
            const passwordsDoMatch = await bcrypt.compare(password, dbUser.password);
            if (dbUser.email && passwordsDoMatch) return done(null, dbUser);
            return done(null, false, { message: 'Invalid credentials.\n' });
        },
    ));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((userId, done) => {
        User.find(userId)
            .then(user => done(null, user))
            .catch(error => done(error, false));
    });

    app.set('etag', false);
    app.use((req, res, next) => {
        res.set('Cache-Control', 'no-store');
        next();
    });

    app.use(session({
        genid: (req) => {
            return uuid.v4(); // use UUIDs for session IDs
        },
        store: new FileStore(),
        secret: 'keyboard cat', // should be env var
        resave: false,
        saveUninitialized: true,
    }));

    app.use(passport.initialize());
    app.use(passport.session());
};

module.exports = addAuth;
