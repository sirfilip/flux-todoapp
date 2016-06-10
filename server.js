var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api/v1/todos', require('./api/v1/todos'));

app.listen(3000, function() {
  console.log('Application running on http://localhost:3000');
});
