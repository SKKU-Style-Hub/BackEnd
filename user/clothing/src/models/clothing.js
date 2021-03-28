const mongoose = require('mongoose')


const clothingSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    clothingImg: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    colorDetail: {
        type: String,
    },
    // 패턴
    print: {
        type: Array,
    },
    price: {
        type: Number,
    },
    // Style
    look: {
        type: String,
    },
    texture: {
        type: String
    },
    detail: {
        type: String
    },
    length: {
        type: String
    },
    sleeveLength: {
        type: String
    },
    neckLine: {
        type: String
    },
    fit: {
        type: String
    },
    shape: {
        type: String
    },
    brandName: {
        type: String
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