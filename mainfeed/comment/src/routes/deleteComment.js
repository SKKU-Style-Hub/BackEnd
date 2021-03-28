const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()

router.post('/api/comment/delete', async (req, res) => {
    //TODO : token 에서 유저 정보 가져오기
    const { feedId, commentId } = req.body
    // 피드, 유저, 생성 시간
    await Comment.deleteOne({ feedId: feedId, _id: commentId })
    res.send()
})

module.exports = router