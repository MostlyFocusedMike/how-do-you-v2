const handler = (router) => {
    router.get('/log-in', (req, res) => {
        console.log('Inside GET /log-in callback function');
        console.log('req.sessionID', req.sessionID);
        if (req.isAuthenticated()) return res.redirect('/auth-required');
        console.log('req.body: ', req.body);
        const error = req.flash('error')[0]; // seems flash can only be called once so store it
        res.send(`
        <h1>Log in</h1>
        <form method="POST" action="/log-in">
            <p style="color: red;">${error ? `Login error: ${error}`: ''}</p>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button>Submit</button>
        </form>
        `);
    });
}

module.exports = handler;