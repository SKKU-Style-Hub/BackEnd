const express = require('express')
const Post = require('../models/content')
const StylingResponseUpdated = require('../events/StylingResponseUpdated')
const router = express.Router()

// Styling Response Created Event Emitted
router.post('/api/post/styling/update/response', async (req, res) => {
    const { stylingPostId, stylingResponse } = req.body
    await Post.findOneAndUpdate({ _id: stylingPostId }, { $push: { stylingResult: stylingResponse } })
    const updatedStylingPost = await Post.findOne({ _id: stylingPostId })
    StylingResponseUpdated(updatedStylingPost)
    res.send()
})


module.exports = router