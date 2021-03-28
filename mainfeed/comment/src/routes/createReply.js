const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()
const axios = require('axios')

router.post('/api/comment/create/reply', async (req, res) => {
    //TODO : token 에서 유저 정보 가져오기
    const { feedId, userProfile, commentId, comment } = req.body
    const repliedComment = new Comment({
        userProfile: userProfile,
        comment: comment,
        feedId: feedId,
        createdAt: Date.now()
    })
    const query = { _id: commentId, feedId: feedId }
    // const target = await Comment.findOne(query)
    // const reply = target.reply.push(repliedComment)
    await Comment.findOneAndUpdate(query, { $push: { reply: repliedComment } })
    // target.reply = []
    // target.reply.push(reply)
    // await axios.post('http://172.18.0.1:82/api/mainfeed/update/comment')

    res.send()
})

module.exports = router