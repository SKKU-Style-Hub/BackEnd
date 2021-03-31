// DB 따로 필요 없어 보임
const mongoose = require('mongoose')

const removeBackgroundSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    imageType: {
        type: String,
        required: true
    }
})

const RemBg = mongoose.model('Image', removeBackgroundSchema)
module.exports = RemBg

