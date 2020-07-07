const handler = (router) => {
    router.get('/sign-up', async (req, res, next) => {
        console.log('Inside GET /sign-up');
        if (req.isAuthenticated()) return res.redirect('/auth-required');
        return res.send(`
        <h1>Sign Up!</h1>
        <form method="POST" action="/sign-up">
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
