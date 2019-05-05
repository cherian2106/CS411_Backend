// var secrets = require('../config/secrets');
var mysql = require('mysql');
const config = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b7a5bff2b6a90e',
    password: '15905885',
    database: 'heroku_557cfceed03f11d'
}
// var mysql = require('mysql');
var connection;
// var bodyParser = require('body-parser')
module.exports = function (router) {

    var commentRoute = router.route('/comments/:id');
    var commentsRoute = router.route('/comments');
    // var startupRoute = router.route('/:id');

    commentRoute.get(function (req, res) {
        // console.log(JSON.parse(req.query.name));
        console.log(req.params.id);
  
        connection = mysql.createConnection(config);
        connection.query({sql: "SELECT * FROM comment WHERE StartupID = ?", values: [JSON.parse(req.params.id)]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows);
        })
        connection.end();
    });

    commentsRoute.post(function (req, res) {
        console.log("mwwwww");
        connection = mysql.createConnection(config);
        connection.query({sql: "INSERT INTO comment SET ?", values: [req.body]}, function(err, rows) {
            if (err) { console.log(err); }
            res.send(rows)
        });
        console.log("reached")
        connection.end();
    });

    return router;
}
