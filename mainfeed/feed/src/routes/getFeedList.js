const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()


router.post('/api/mainfeed/list', async (req, res) => {
    // 최신 10개 출력
    // id 내림차순 정렬
    const feedList = await MainFeed.find().sort({ "createdAt": -1 }).limit(10)
    res.send(JSON.stringify(feedList))
})

module.exports = router

