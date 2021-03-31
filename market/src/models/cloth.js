const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const clothSchema = new mongoose.Schema({
    brandName: {
        type: String,
    },
    price: {
        type: Number,
    },
    username: {
        type: String,
        required: true
    },
    pattern: {
        type: Array
    },
    color: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    marketClothingId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true })

clothSchema.plugin(AutoIncrement, { inc_field: 'marketClothingId' })

const Cloth = mongoose.model('Cloth', clothSchema)
module.exports = Cloth
