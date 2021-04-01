const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()


router.post('/api/mainfeed/create/comment', async (req, res) => {
    const { feedId, newComment } = req.body
    console.log(newComment)
    await MainFeed.findOneAndUpdate({ feedId: feedId }, { $push: { comments: newComment } }).then().catch(console.log('err'))
    res.send()
})

module.exports = router