var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', routes.index);
app.get('/about', routes.about);

app.listen(port, function () {
    console.log('Server listening on port ' + port + '...');
});