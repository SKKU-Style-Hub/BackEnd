const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()

router.post('/api/comment/delete/reply', async (req, res) => {
    //TODO : token 에서 유저 정보 가져오기
    const { feedId, commentId, replyId } = req.body
    // 피드, 유저, 생성 시간
    // const query = { feedId: feedId, "reply._id": replyId }
    // console.log("Find Start")
    const target = await Comment.findOne({ feedId: feedId, _id: commentId }).where('reply').in([replyId])
    // res.json(target)
    await Comment.findOneAndUpdate(query, { $pull: { reply: { _id: replyId } } })
    res.send()
})

module.exports = router