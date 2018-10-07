const DataTypes = require('sequelize/lib/data-types');

module.exports = function (sequelize) {
  var User = sequelize.define( 'User', {
    firstName:  DataTypes.STRING,
     lastName:  DataTypes.STRING,
     position:  DataTypes.STRING,
       height:  DataTypes.INTEGER,
   weight_lbs:  DataTypes.DECIMAL,
       school:  DataTypes.STRING,
         wins:  DataTypes.INTEGER,
       losses:  DataTypes.INTEGER

  });
  return User;
}
