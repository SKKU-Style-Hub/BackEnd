const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)


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
    },
    clothingId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true });

clothingSchema.plugin(AutoIncrement, { inc_field: 'clothingId' })


const Clothing = mongoose.model('Clothing', clothingSchema)
module.exports = Clothing