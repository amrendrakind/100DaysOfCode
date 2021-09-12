const express =require("express")
const router = express.Router();
const app = express();
app.use(express.json());

const {
  createTodo,
  allTodo,
  todo,
  updatetodo,
  deletetodo,
} =require ("../controllers/todo.controller.js")

router.post("/add", createTodo);          //Add todos
router.get("/alltodos", allTodo);         // Get all todos
// router.get("/todo/:id", todo);            // get todos by id
// router.patch("/update/:id", updatetodo);  // update by id
// router.delete("/delete/:id", deletetodo); //  delete by id 

module.exports = router
