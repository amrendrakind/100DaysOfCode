module.exports = (sequelize, Sequelize) => {
   const Tutorial = sequelize.define("todos", {
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
  
    return todos;
  };