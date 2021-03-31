const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()

// Reload에 대해서 고민해야 한다
router.post('/api/mainfeed/list/update', async (req, res) => {
    // 최신 피드 10개 가져오기

    const feedList = await MainFeed.find().sort({ "createdAt": -1 }).limit(10)
    res.send(feedList)

})

module.exports = router

