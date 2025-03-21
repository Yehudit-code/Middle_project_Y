const express = require("express")
const router = express.Router()

const todoController = require("../controllers/todoController")

router.get("/", todoController.getAllTodos)
router.get("/:id", todoController.getTodoByID)
router.post("/", todoController.createTodo)
router.put("/", todoController.updateTodo)
router.delete("/", todoController.deleteTodo)

module.exports = router