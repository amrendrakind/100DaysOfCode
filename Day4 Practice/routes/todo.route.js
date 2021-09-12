const express =require("express")
const router = express.Router();
const app = express();
app.use(express.json());

const {
  createtodo,
  Alltodo,
  todo,
  updatetodo,
  deletetodo,
} =require ("../controllers/todo.controller.js")

router.post("/add", createtodo);          //Add todos
router.get("/alltodos", Alltodo);         // Get all todos
// router.get("/todo/:id", todo);            // get todos by id
// router.patch("/update/:id", updatetodo);  // update by id
// router.delete("/delete/:id", deletetodo); //  delete by id 

module.exports= router;
