const mongoose = require("mongoose")

const photoSchema = mongoose.Schema(
    {
        title: {
            type: String
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    { timestamp: true }

)

module.exports = mongoose.model('Photo', photoSchema)
