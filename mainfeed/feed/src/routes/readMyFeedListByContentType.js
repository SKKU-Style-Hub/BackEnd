const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()

// Reload에 대해서 고민해야 한다
router.post('/api/mainfeed/list/read/content', async (req, res) => {
    const { userProfile, contentType } = req.body
    // 현재 피드 기준 이전 피드 20개 가져오기
    const userNickname = userProfile.userNickname
    const feedList = await MainFeed.find({ userNickname: userNickname, contentType: contentType }).sort({ "createdAt": 1 })
    // 이후 업데이트
    res.send(feedList)
})

module.exports = router

