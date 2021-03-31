const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose)

const generalSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true,
    },
    postImage: {
        type: Array,
    },
    postContent: {
        type: String,
        required: true
    },
    generalPostId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true })

generalSchema.plugin(AutoIncrement, { inc_field: 'generalPostId' })

const GeneralPost = mongoose.model('Post', generalSchema)
module.exports = GeneralPost

