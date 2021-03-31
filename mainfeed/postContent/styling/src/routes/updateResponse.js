const express = require('express')
const Post = require('../models/content')
const StylingResponseUpdated = require('../events/StylingResponseUpdated')
const router = express.Router()

// 스타일링 제안시 포스트에 업데이트
router.post('/api/post/styling/update/response', async (req, res) => {
    const { stylingPostId, stylingResponse } = req.body
    console.log({
        stylingPostId: stylingPostId,
        stylingResponse: stylingResponse
    })
    await Post.findOneAndUpdate({ stylingPostId: stylingPostId }, { $push: { stylingResult: stylingResponse } })
    const updatedStylingPost = await Post.findOne({ stylingPostId: stylingPostId })
    StylingResponseUpdated(updatedStylingPost)
    console.log('Styling Response Updated to Styling Post Success')
    res.send()

})


module.exports = router

