const Todo = require("../models/Todo")

const createTodo = async (req, res) => {
    const { title, tags, complete } = req.body
    if (!title || !tags) {
        return res.status(400).json(`title, complete and tags are required`)
    }
    const todo = await Todo.create({ title, tags, complete })
    res.json(todo)
}

const getTodoByID = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).json(`not found ID`)
    const todo = await Todo.findById(id)
    if (!todo)
        return res.status(400).json(`todo not found`)
    res.send(todo)
}

const getAllTodos = async (req, res) => {
    const todos = await Todo.find()
    if (!todos)
        return res.status(400).json(`no todos`)
    res.send(todos)
}

const updateTodo = async (req, res) => {
    const { title, tags, id ,complete} = req.body
    if (!title || !tags || !id)
        return res.status(400).json(`title, id and tags are required`)
    const todo = await Todo.findById(id)
    if (!todo)
        return res.status(400).json(`todo not found`)
    todo.title = title
    todo.tags = tags
    todo.complete = complete
    const newTodo = await todo.save()
    res.send(newTodo)
}

const deleteTodo = async (req, res) => {
    const {id}= req.body
    if (!id)
        return res.status(400).json(`ID is required`)
    const todo = await Todo.findById(id)
    if (!todo)
        return res.status(400).json(`todo not found`)
    const result = await Todo.deleteOne(todo)
    res.json(`success to delete ${result}`)
}

module.exports = { createTodo, getTodoByID, getAllTodos, updateTodo, deleteTodo }