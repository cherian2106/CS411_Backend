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

    var usersRoute = router.route('/users');
    var userRoute = router.route('/users/:id');

    userRoute.get(function (req, res) {
        // console.log(JSON.parse(req.query.name));
        var query;
        // query = "START TRANSACTION;"+
        // "SELECT @A:=COUNT(StartupID) FROM startup WHERE UserID = ?;"+
        // "UPDATE user SET Num_startups=@A WHERE UserID = ?;"+
        // "COMMIT;"
        connection = mysql.createConnection(config);
        //   connection.beginTransaction(function(err) {
        //     if(err) { throw err; }
        //     connection.query({sql: "SELECT StartupID FROM startup WHERE UserID = ?", values: [req.params.id]}, function(err, result) {
        //         console.log(req.params.id);
        //         // console.log(err);
        //         if (err) {
        //             connection.rollback(function() {
        //                 console.log(err);
        //             })
        //         };
        //         // console.log(result);
        //         var log = result
        //         console.log(log);
        //     });
        // })
        var query = "SELECT * FROM user";
        connection.query({sql: query, values: [req.body]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows)
        })
        connection.end();

        // connection.query({sql: query, values: req.params.id}, function(err, rows, fields) {
        //     if (err) { throw err; }
        //     res.send(rows);
        // })
    });

    usersRoute.post(function (req, res) {
        // sql.connect( function(err) {
        //     if(err) { console.log(err); }
        // });
        // handle(sql);
        connection = mysql.createConnection(config);
        connection.query({sql: "INSERT INTO user SET ?", values: [req.body]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows)
        })

        connection.end();
        // sql.end();
    });

    return router;
}
