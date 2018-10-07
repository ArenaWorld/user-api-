var Sequelize = require('sequelize');
var config = require('./config/config.json');

var sequelize = new Sequelize(`postgres://MassCreation@localhost:5432/token0` );

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;
