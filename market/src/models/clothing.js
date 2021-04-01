const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const clothSchema = new mongoose.Schema({
    // userProfile 의 seller 버전
    sellerProfile: {
        type: Object
    },
    clothingImage: {
        type: String,
        required: true
    },
    tagResult: {
        type: Object
    },
    marketClothingId: {
        type: Number,
        default: 0,
        index: true
    }
}, { timestamps: true })

clothSchema.plugin(AutoIncrement, { inc_field: 'marketClothingId' })

const Cloth = mongoose.model('Cloth', clothSchema)
module.exports = Cloth
