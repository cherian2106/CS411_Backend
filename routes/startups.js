// var secrets = require('../config/secrets');
var sql = require('../connection.js');
var bodyParser = require('body-parser')
module.exports = function (router) {

    var startupsRoute = router.route('/');
    var startupRoute = router.route('/:id');

    startupsRoute.get(function (req, res) {
        // var connectionString = secrets.token;
        var query;
        if (req.query.name) { query = "SELECT * FROM Startup WHERE Name LIKE '%" + JSON.parse(req.query.name) + "%';"; }
        else { query = "SELECT * FROM Startup"; }
        sql.query({sql: query}, function(err, rows, fields) {
            if (err) { throw err; }
            // console.log(JSON.parse(req.query.name));
            res.send(rows);
        })
    });

    startupsRoute.post(function (req, res) {
        sql.query({sql: "INSERT INTO Startup SET ?", values: [req.body]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows)
        })
    });

    startupRoute.get(function (req, res) {
        // console.log(req.params.id)
        sql.query({sql: "SELECT * FROM Startup WHERE StartupID = ?", values: [JSON.parse(req.params.id)]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows);
        })
    });

    startupRoute.put(function (req, res) {
        console.log(req.body);

        sql.query({sql: "UPDATE Startup SET ? WHERE StartupID = ?", values: [req.body, JSON.parse(req.params.id)]}, function(err, rows) {
           if (err) {throw err; }
            res.send(rows);
        })
        //"UPDATE Startup SET ? WHERE StartupID = ?" values: [req.body, JSON.parse(req.params.id)]
    });

    startupRoute.delete(function (req, res) {
        sql.query({sql: "DELETE FROM Startup WHERE StartupID = ?", values: [JSON.parse(req.params.id)]}, function(err, rows) {
            if (err) { throw err; }
            res.send(rows);
        })
    })

    return router;
}
