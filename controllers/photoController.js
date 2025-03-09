const Photo = require("../models/Photo")

const createPhoto = async (req, res) => {
    const { title, imageUrl } = req.body
    if (!imageUrl)
        return res.status(400).json(`imageUrl is required`)
    const photo = await Photo.create({ title, imageUrl })
    res.json(photo)
}

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find().lean()
    if (!photos)
        return res.status(400).json(`no photo`)
    res.json(photos)
}

const getPhotoByID = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findByID(id)
    if (!photo)
        return res.status(400).json(`photo not found`)
    res.json(photo)
}

const updatePhoto = async (req, res) => {
    const { id, title, imageUrl } = req.body
    if (!imageUrl || !id)
        return res.status(400).json(`imageUrl and id are required`)
    const photo = await Photo.findByID(id)
    if (!photo)
        return res.status(400).json(`photo not found`)
    photo.title = title
    photo.imageUrl = imageUrl
    const updatedPhoto = await photo.save()
    res.json(updatedPhoto)
}

const deletePhoto = async (req, res) => {
    const { id } = req.body
    if (!id)
        return res.status(400).json(`ID is required`)
    const photo = await Photo.findByID(id)
    if (!photo)
        return res.status(400).json(`don't found this photo`)
    const result = await Photo.deleteOne(photo)
    res.json(`success to delete ${result}`)
}
module.exports = { createPhoto, getAllPhotos, getPhotoByID, updatePhoto, deletePhoto }