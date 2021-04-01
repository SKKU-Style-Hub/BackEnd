const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()
const CommentCreated = require('../events/commentCreated')

router.post('/api/comment/create', async (req, res) => {
    //TODO : token 에서 유저 정보 가져오기
    const { feedId, userProfile, comment } = req.body

    const newComment = new Comment({
        userProfile: userProfile,
        comment: comment,
        feedId: feedId
    })
    await newComment.save()
    CommentCreated(newComment)
    res.json(newComment)
})
module.exports = router