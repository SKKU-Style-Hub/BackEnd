const mongoose = require('mongoose')

const MainFeedSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    contentType: {
        type: String
    },
    content: {
        type: Object,
        required: true
    },
    comments: {
        type: Array,
    }
}, { timestamps: true });

const MainFeed = mongoose.model('Mainfeed', MainFeedSchema)

module.exports = MainFeed