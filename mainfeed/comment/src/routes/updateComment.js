const express = require('express')
const Comment = require('../models/comment')
const CommentUpdated = require('../events/commentUpdated')
const router = express.Router()

router.post('/api/comment/update', async (req, res) => {
    // change 는 변경될 정보 JSON 형식 (필요한 부분)
    const { feedId, commentId, updatedComment } = req.body
    // 피드, 유저, 생성 시간
    const query = { feedId: feedId, _id: commentId }
    await Comment.findOneAndUpdate(query, { $set: updatedComment })
    CommentUpdated({
        updateQuery: query,
        updatedComment: updatedComment
    })
    res.send()
})

module.exports = router