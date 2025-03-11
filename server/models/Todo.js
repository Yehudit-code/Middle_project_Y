const mongoose = require("mongoose")

const todoSchema = mongoose.Schema(
    {
        title:{
            type: String,
            requires: true
        },
        tags:{
            type: String
        },
        complete:{
            type: Boolean,
            default: false
        }
    },
    { timestamp: true}
)


module.exports = mongoose.model('Todo', todoSchema)