var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/users', function(request, response) {
  response.send('ici liste des utilisateurs!');
});


app.get('/profil', function(request, response) {
  response.send('mon profile!');
});

app.get('/login', function(request, response) {
  response.send('se connecter!');
});

app.get('/teste', function(request, response) {
  response.send('teste se connecter!');
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
