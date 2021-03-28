const mongoose = require('mongoose');

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
}, { timestamps: true })

const GeneralPost = mongoose.model('Post', generalSchema)
module.exports = GeneralPost

