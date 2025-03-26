const Photo = require("../models/Photo")

const createPhoto = async (req, res) => {
    const { title, imageUrl } = req.body
    if (!imageUrl)
        return res.status(400).json(`imageUrl is required`)
    await Photo.create({ title, imageUrl })
    const photos =await Photo.find()
    res.json(photos)
}

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find().lean()
    if (!photos)
        return res.status(400).json(`no photo`)
    res.json(photos)
}

const getPhotoByID = async (req, res) => {
    const { id } = req.params
    const photo = await Photo.findById(id)
    if (!photo)
        return res.status(400).json(`photo not found`)
    res.json(photo)
}

const updatePhoto = async (req, res) => {
    const { id, title, imageUrl } = req.body
    if (!imageUrl || !id)
        return res.status(400).json(`imageUrl and id are required`)
    const photo = await Photo.findById(id)
    if (!photo)
        return res.status(400).json(`photo not found`)
    photo.title = title
    photo.imageUrl = imageUrl
    await photo.save()
    const photos = await Photo.find()
    res.json(photos)
}

const deletePhoto = async (req, res) => {
    const { id } = req.params
    if (!id)
        return res.status(400).json(`ID is required`)
    const photo = await Photo.findById(id)
    if (!photo)
        return res.status(400).json(`don't found this photo`)
    await Photo.deleteOne(photo)
    const photos = await Photo.find()
    res.json(photos)
    
}
module.exports = { createPhoto, getAllPhotos, getPhotoByID, updatePhoto, deletePhoto }