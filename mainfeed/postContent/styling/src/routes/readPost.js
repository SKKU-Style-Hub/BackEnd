const express = require('express')
const Post = require('../models/content')

const router = express.Router()

// StylingPostCreated Event Emitted
router.post('/api/post/styling/read', async (req, res) => {

    // 스타일링 post Id 로 쉽게 
    const { stylingPostId } = req.body

    const stylingPost = await Post.findOne({ stylingPostId: stylingPostId })
    res.json(stylingPost);
})


module.exports = router