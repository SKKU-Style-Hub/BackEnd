const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()

// Reload에 대해서 고민해야 한다
router.post('/api/mainfeed/list/read', async (req, res) => {
    const { lastFeedId } = req.body

    // 현재 피드 기준 이전 피드 10개 가져오기
    // Less Than 쿼리 사용 
    const feedList = await MainFeed.find({ "feedId": { $lt: lastFeedId } }).sort({ "feedId": -1 }).limit(10)
    // 이후 업데이트
    res.send(feedList)
})

module.exports = router

