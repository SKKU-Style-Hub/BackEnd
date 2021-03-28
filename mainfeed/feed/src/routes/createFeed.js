const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()


router.post('/api/mainfeed/create', async (req, res) => {
    console.log("mainfeed create is working...")
    const { userProfile, content, contentType } = req.body
    // 최신 10개 출력  
    // id 내림차순 정렬
    const feed = new MainFeed({
        contentType: contentType,
        userProfile: userProfile,
        content: content,
    })
    await feed.save()
    res.send()
})

module.exports = router