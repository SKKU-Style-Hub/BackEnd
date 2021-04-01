const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

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
    },
    // userProfile
    // isLike 가 이해가 안 가는데 
    likes: {
        type: Array,
    },
    feedId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true });

MainFeedSchema.plugin(AutoIncrement, { inc_field: 'feedId' })

const MainFeed = mongoose.model('Mainfeed', MainFeedSchema)

module.exports = MainFeed