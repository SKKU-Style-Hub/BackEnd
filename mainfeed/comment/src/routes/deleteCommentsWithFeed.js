const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()

router.post('/api/comment/delete/feed', async (req, res) => {
    const { feedId } = req.body
    // 피드, 유저, 생성 시간
    await Comment.deleteMany({ feedId: feedId })
    res.send()
})

module.exports = router