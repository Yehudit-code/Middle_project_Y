const express = require("express")
const router = express.Router()

const photoController = require("../controllers/photoController")

router.post("/", photoController.createPhoto)
router.get("/", photoController.getAllPhotos)
router.get("/:id", photoController.getPhotoByID)
router.put("/", photoController.updatePhoto)
router.delete("/", photoController.deletePhoto)

module.exports = router