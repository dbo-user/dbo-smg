// load the necessary resources
var express = require('express');
var app = express();

// static files like images are in the views folder
app.use( express.static( "views" ) );

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// load the index.ejs file
app.get('/', function(req, res) {
    res.render('index');
});

// create the Node.js web server at port 5000
app.listen(5000);
console.log('Server is up and running on port 5000, view http://localhost:5000');