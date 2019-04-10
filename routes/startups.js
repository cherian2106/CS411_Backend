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

    var startupsRoute = router.route('/');
    var startupRoute = router.route('/:id');

    startupsRoute.get(function (req, res) {

        var query;
        if (req.query.name) { query = "SELECT * FROM startup WHERE Name LIKE '%" + JSON.parse(req.query.name) + "%';"; }
        else { query = "SELECT * FROM startup"; }       
        connection = mysql.createConnection(config);

        connection.query({sql: query}, function(err, rows, fields) {
            if (err) { throw err; }
            res.send(rows);
        })
        connection.end();
        // sql.end();
    });

    startupsRoute.post(function (req, res) {
        // sql.connect( function(err) {
        //     if(err) { console.log(err); }
        // });
        // handle(sql);
        connection = mysql.createConnection(config);
        connection.query({sql: "INSERT INTO startup SET ?", values: [req.body]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows)
        })

        connection.end();
        // sql.end();
    });

    startupRoute.get(function (req, res) {
        console.log(req.params.id);
  
        connection = mysql.createConnection(config);
        connection.query({sql: "SELECT * FROM startup WHERE StartupID = ?", values: [JSON.parse(req.params.id)]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows);
        })
        connection.end();
    });

    startupRoute.put(function (req, res) {
        console.log(req.body);

        connection = mysql.createConnection(config);
        connection.query({sql: "UPDATE startup SET ? WHERE StartupID = ?", values: [req.body, JSON.parse(req.params.id)]}, function(err, rows) {
           if (err) {throw err; }
            res.send(rows);
        })
        connection.end();
        //"UPDATE Startup SET ? WHERE StartupID = ?" values: [req.body, JSON.parse(req.params.id)]
    });

    startupRoute.delete(function (req, res) {
        // handle(sql);
        connection = mysql.createConnection(config);
        connection.query({sql: "DELETE FROM startup WHERE StartupID = ?", values: [JSON.parse(req.params.id)]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows);
        })
        connection.end();
    })

    return router;
}
