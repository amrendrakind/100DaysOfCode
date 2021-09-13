module.exports = app => {
  const todoModel = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Insert into a todos list
  router.post("/", todoModel.create);

  // Retrieve all todos data
  router.get("/", todoModel.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/todos", router);
};
