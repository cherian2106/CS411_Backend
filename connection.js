var mysql = require('mysql');
    
var connection = mysql.createConnection({
    host: 'sp19-cs411-32.cs.illinois.edu',
    port: 3306,
    user: 'test',
    password: '123',
    database: 'test'
});
connection.connect( function(err) {
    if(err) { throw err; }
});
module.exports = connection;