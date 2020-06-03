const path = require('path');
const express = require('express');
const uuid = require('uuid');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const flash = require('connect-flash');

const User = require('./models/user');
const addAllRoutes = require('./routes');

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        console.log('email: ', email);
        const dbUser = await User.findBy('email', email);
        console.log('dbUser: ', dbUser);
        if (!dbUser) return done(null, false, {message: 'no User\n'})
        const passwordsDoMatch = await bcrypt.compare(password, dbUser.password);
        if (dbUser.email && passwordsDoMatch) return done(null, dbUser);
        return done(null, false, { message: 'Invalid credentials.\n' });
    },
));

passport.serializeUser((user, done) => {
    console.log('Inside serialize user method');
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    console.log('in deserialize: ');
    console.log('userId: ', userId);
    User.find(userId)
        .then(user => done(null, user))
        .catch(error => done(error, false));
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('etag', false);
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

app.use(flash());

app.use(session({
    genid: (req) => {
        console.log('Inside the session middleware');
        console.log('middle ware session id:', req.sessionID);
        return uuid.v4(); // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat', // should be env var
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// set up static files router
// const options = {
//     setHeaders: (res, path, stat) => { // eslint-disable-line no-shadow
//         res.set('x-timestamp', Date.now());
//     },
// };
// const staticFiles = express.static(path.join(__dirname, '..', '..', 'build'), options);
// app.use(staticFiles);

addAllRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port 'http://localhost:${port}!`);
});
