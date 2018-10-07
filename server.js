const express        = require('express');
const sequelize      = require('sequelize');
const bodyParser     = require('body-parser');
const db             = require('./db.js');
const user           = require('./api/models/userModel');
const routes         = require('./api/routes/users')
const app            = express();
const port = 8000;

var userTable = user(db);

//bodyParser
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.text() )
app.use( bodyParser.json({ type: 'application/vmd.api+json'}) )

/* GET home page. */
app.get('/api/', function(req, res, next) {
  res.render('index');
});


// Sync to the database before running server
db.sync().then(function() {
  // Listen on port
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
