module.exports = function (router) {

    var homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        res.json({ message: 'My connection string is SQL ClearDB'});
    });

    return router;
}
