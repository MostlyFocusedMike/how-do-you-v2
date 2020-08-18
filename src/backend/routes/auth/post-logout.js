const handler = (router) => {
    router.post('/logout', (req, res) => {
        console.log('logout: ');
        req.logout();
        console.log('req', req.isAuthenticated());
        res.json({ msg: 'Logged out' });
    });
};

module.exports = handler;
