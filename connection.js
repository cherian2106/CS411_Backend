var mysql = require('mysql');
    
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b7a5bff2b6a90e',
    password: '15905885',
    database: 'heroku_557cfceed03f11d'
});
connection.connect( function(err) {
    if(err) { throw err; }
});
module.exports = connection;