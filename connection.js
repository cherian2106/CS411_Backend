var mysql = require('mysql');
var config = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b7a5bff2b6a90e',
    password: '15905885',
    database: 'heroku_557cfceed03f11d'
}
var connection;
connection = mysql.createConnection(config);
connection.query('SET GLOBAL connect_timeout=1000000')
connection.query('SET GLOBAL wait_timeout=1000000')
connection.query('SET GLOBAL interactive_timeout=1000000')

// connection.connect( function(err) {
//     if(err) { console.log(err); }
// });
// module.exports = connection;
// connection.connect( function(err) {
//     if(err) { throw err; }
// });

function handleDisconnect(connection) {
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            connection = mysql.createConnection(config);
            connection.connect(function(err) {
                if(err) {                                     // or restarting (takes a while sometimes).
                    console.log('error when connecting to db:', err);
                    // setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
                }
            });                      // lost due to either server restart, or a
        }
        else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
    });
  }

handleDisconnect(connection);

module.exports.connection = connection;
module.exports.handleDisconnect = handleDisconnect;
