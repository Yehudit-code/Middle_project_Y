const express = require("express")
const router = express.Router()

const postController = require("../controllers/postController")

router.get("/", postController.getAllPosts)
router.get("/:id", postController.getPostByID)
router.post("/", postController.createPost)
router.put("/", postController.updatePost)
router.delete("/", postController.deletePost)

module.exports = router