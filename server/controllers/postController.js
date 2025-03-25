const Post = require("../models/Post")

const createPost = async (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(400).json(`title and body are required`)
    }
    await Post.create({ title, body })
    const posts = await Post.find()
    res.json(posts)
}

const getPostByID = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).json(`not found ID`)
    const post = await Post.findById(id)
    if (!post)
        return res.status(400).json(`post not found`)
    res.send(post)
}

const getAllPosts = async (req, res) => {
    const posts = await Post.find()
    if (!posts)
        return res.status(400).json(`no posts`)
    res.send(posts)
}

const updatePost = async (req, res) => {
    const { title, body, id } = req.body
    if (!title || !body || !id)
        return res.status(400).json(`title, id and body are required`)
    const post = await Post.findById(id)
    if (!post)
        return res.status(400).json(`post not found`)
    post.title = title
    post.body = body
    await post.save()
    const posts = await Post.find()
    res.json(posts)
}

const deletePost = async (req, res) => {
    const {id}= req.params
    if (!id)
        return res.status(400).json(`ID is required`)
    const post = await Post.findById(id)
    if (!post)
        return res.status(400).json(`post not found`)
    await Post.deleteOne(post)
    const posts = await Post.find()
    res.json(posts)
}

module.exports = { createPost, getPostByID, getAllPosts, updatePost, deletePost }