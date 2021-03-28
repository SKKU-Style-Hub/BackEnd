const mongoose = require('mongoose')

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
    }
}, { timestamps: true })

const Cloth = mongoose.model('Cloth', clothSchema)
module.exports = Cloth
