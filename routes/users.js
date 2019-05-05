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
    // var startupRoute = router.route('/:id');

    usersRoute.get(function (req, res) {
        // console.log(JSON.parse(req.query.name));
        var query;
        query = "SHOW TABLES;"
        connection = mysql.createConnection(config);

        connection.query({sql: query}, function(err, rows, fields) {
            if (err) { throw err; }
            res.send(rows);
        })
        connection.end();
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
