const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const clothingSchema = new mongoose.Schema({
    // userProfile 의 seller 버전
    sellerProfile: {
        type: Object
    },
    clothingImage: {
        type: String,
    },
    tagResult: {
        type: Object
    },
    price: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        default: ''
    },
    marketClothingId: {
        type: Number,
        default: 0,
        index: true
    }
}, { timestamps: true })

clothingSchema.plugin(AutoIncrement, { inc_field: 'marketClothingId' })

const Clothing = mongoose.model('Cloth', clothingSchema)
module.exports = Clothing
