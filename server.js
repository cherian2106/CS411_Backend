// Get the packages we need
var express = require('express'),
    router = express.Router(),
    // mysql = require('mysql'),
    // mongoose = require('mongoose'),
    // secrets = require('./config/secrets'),
    bodyParser = require('body-parser');

// Create our Express application
var app = express();

// Use environment defined port or 4000
var port = process.env.PORT || 4000;
//host='sp19-cs411-32.cs.illinois.edu',port=3306, user='test',password='123',db='test')
// var connection = mysql.createConnection({
//     host: 'sp19-cs411-32.cs.illinois.edu',
//     port: 3306,
//     user: 'test',
//     password: '123',
//     database: 'test'
// });
// connection.connect();
// .catch(err => {
//     console.log(err);
// });

// connection.query('SHOW TABLES', function(err, rows, fields) {
//     if (err) {
//         throw (err);
//     }
//     console.log(rows);
// })
// connection.query('describe User')
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// });

// connection.end();
// Connect to a MongoDB
// mongoose.connect(secrets.mongo_connection, { useNewUrlParser: true });
// mongoose.set('useCreateIndex', true);
// mongoose.set('runValidators', true)
// var db = mongoose.connection;
// // console.log(db);
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// A good way to handle this is to make a module, perhaps called db.js, where you import Mongoose,
// connect to the DB and then export the instantiated object.
// Now when you import this object into multiple files you will only have one database connection.

// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

// // Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// // Use routes as a module (see index.js)
require('./routes')(app, router);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
