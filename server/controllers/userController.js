const User = require("../models/User")

const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    if (!users) {
        return res.status(404).send("no users!")
    }
    res.json(users)
}

const getUserByID = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).lean()
    if (!user) {
        return res.status(404).send("no user!")
    }
    res.json(user)
}

const createUser = async (req, res) => {
    const { name, username,email,address,phone } = req.body
    if (!name || !username ||!phone) {
        return res.status(400).send("title and body and phone is required")
    }
    const post = await User.create({ name, username,email,address,phone })
}

const updateUser = async (req, res) => {
    const {id, name, username,email,address,phone } = req.body
    if (!id||!name || !username ||!phone) {
        return res.status(400).send("title and body and phone is required")
    }
    const user = await User.findById(id).lean()
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone
    const updateUser = await User.save(user)
    res.json(updateUser)
}

const deleteUser = async (req, res) => {
    const { id } = req.body
    if (!id)
        return res.status(400).json("I must id")
    const user = await User.findByID(id)
    if (!user)
        return res.status(404).json("not found user")
    const result = await User.deleteOne(user)
    res.json(`success to delete ${result}`)
}
module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser }