const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    // Cloth Data Object Array
    requestClothings: {
        type: Array,
        required: true
    },
    budgetMin: {
        type: Number,
        required: true
    },
    budgetMax: {
        type: Number,
        required: true
    },
    requestItems: {
        type: Array,
        required: true,
    },
    requestStyle: {
        type: Array,
        required: true
    },
    requestContent: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Request = mongoose.model('Request', requestSchema)
module.exports = Request
