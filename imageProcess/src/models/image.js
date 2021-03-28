// DB 따로 필요 없어 보임
const mongoose = require('mongoose')

const removeBackgroundSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    uploadedImage: {
        type: String,
        required: true
    },
    removedImage: {
        type: String,
        required: true
    }
})

const RemBg = mongoose.model('Image', removeBackgroundSchema)
module.exports = Rembg