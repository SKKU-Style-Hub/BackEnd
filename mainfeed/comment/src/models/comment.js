const mongoose = require('mongoose')

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
    // 대댓글
    reply: {
        type: Array
    },
}, { timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment