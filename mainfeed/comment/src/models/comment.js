const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const commentSchema = new mongoose.Schema({
    feedId: {
        type: String,
        required: true
    },
    userProfile: {
        type: Object,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    // λλκΈ
    reply: {
        type: Array
    },
    // userProfile Object Array
    commentLike: {
        type: Array
    },
    commentId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true })

commentSchema.plugin(AutoIncrement, { inc_field: 'commentId' })


const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment