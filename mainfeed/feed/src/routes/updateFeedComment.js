const express = require('express')
const { update } = require('../models/mainfeed')
const MainFeed = require('../models/mainfeed')
const router = express.Router()


router.post('/api/mainfeed/update/comment', async (req, res) => {
    const { updateQuery, newComment } = req.body
    const query = {
        feedId: updateQuery.feedId,
        commentId: updateQeury.commentId
    }
    // Document 배열에서 특정 키에 대한 값 찾기 ( $elemMatch )
    await MainFeed.findOneAndUpdate({ feedId: query.feedId, commments: { $elemMatch: { commentId: query.commentId } } }, { $set: { comment: newComment } })
    res.send()
})

module.exports = router