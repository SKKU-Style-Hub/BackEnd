const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

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
    },
    stylingRequestId: {
        type: Number,
        default: 1,
        index: true
    },
    resultCounter: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

requestSchema.plugin(AutoIncrement, { inc_field: 'stylingRequestId' })

const Request = mongoose.model('Request', requestSchema)
module.exports = Request
