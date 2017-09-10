var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

app
    .use('/public', express.static(process.cwd() + '/public'))
    .use(express.static('views'));

app.set('view engine', 'ejs');

app
    .get('/', routes.index)
    .get('/Home', routes.index)
    .get('/About', routes.about);

app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});