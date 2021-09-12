module.exports = (sequelize, Sequelize) => {
   const todoModel = sequelize.define("todoModel", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return todoModel;
  };