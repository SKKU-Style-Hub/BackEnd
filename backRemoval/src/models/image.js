// DB 따로 필요 없어 보임
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const removeBackgroundSchema = new mongoose.Schema({
    userNickname: {
        type: String,
    },
    imageId: {
        type: Number,
        default: 0,
        index: true
    }
})

removeBackgroundSchema.plugin(AutoIncrement, { inc_field: 'imageId' })

const RemBg = mongoose.model('Image', removeBackgroundSchema)
module.exports = RemBg

