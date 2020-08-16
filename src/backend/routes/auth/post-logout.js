const handler = (router) => {
    router.post('/logout', (req, res) => {
        console.log('logout: ');
        req.logout();
        console.log('req', req.isAuthenticated());
        res.redirect('/');
    });
};

module.exports = handler;
