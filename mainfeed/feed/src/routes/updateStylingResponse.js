const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()


router.post('/api/mainfeed/update/response', async (req, res) => {
    const { stylingPostId, stylingResponse } = req.body

    // Document 배열에서 특정 키에 대한 값 찾기 ( $elemMatch )
    console.log(stylingResponse)
    await MainFeed.findOneAndUpdate({ "content.stylingPostId": stylingPostId }, { $set: { content: stylingResponse } })
    res.send()
})

module.exports = router