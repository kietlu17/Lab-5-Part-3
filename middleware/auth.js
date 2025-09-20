module.exports = function (req, res, next) {
    if (req.session && req.session.userId) {
        res.locals.userId = req.session.userId;
        return next();
    }
    res.redirect('/users/login');
};
