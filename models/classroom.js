'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {tableName: 'classrooms'});
  Classroom.associate = function(models) {
    // associations can be defined here
  };
  return Classroom;
};