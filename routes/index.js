/*
 * Connect all of your endpoints together here.
 */
var bodyParser = require('body-parser');
module.exports = function (app, router) {
    // app.use('/api', require('./home.js')(router));
    app.use('/', require('./home.js')(router));
    app.use('/startups', require('./startups.js')(router));
    app.use('/users', require('./users.js')(router));
    app.use('/comments', require('./comments.js')(router));
    // app.use(bodyParser);
    // app.use('/startups/:id', require('./startups')
    // app.use('/api/tasks', require('./task_route.js')(router));
};
