const express = require('express')
const Post = require('../models/content')

const router = express.Router()

// StylingPostCreated Event Emitted
router.post('/api/post/styling/read/list/my', async (req, res) => {

    // 스타일링 post Id 로 쉽게 
    const { userProfile } = req.body

    const myStylingPostList = await Post.find({ "userProfile.userNickanme": userProfile.userNickname }).sort({ stylingPostId: 1 })
    res.json(myStylingPostList);
})


module.exports = router