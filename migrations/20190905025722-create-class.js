'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      teacherId: {
        type: Sequelize.INTEGER, 
        reference:{
          model: "teachers", 
          key: "id"
        }, 
        field: "teacher_id"
      },
      classroomId: {
        type: Sequelize.INTEGER,
        reference:{
          model: "classrooms", 
          key: "id"
        }, 
        field: "classroom_id"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        field: "created_at"
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('classes');
  }
};