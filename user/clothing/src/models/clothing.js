const mongoose = require('mongoose')


const clothingSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    clothingImage: {
        type: String,
        required: true
    },
    tagResult: {
        type: Object,
    },
    xCoordinate: {
        type: Number
    },
    yCoordinate: {
        type: Number
    }
}, { timestamps: true });

const Clothing = mongoose.model('Clothing', clothingSchema)
module.exports = Clothing