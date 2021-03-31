const express = require('express')
const GeneralPost = require('../models/content')
const router = express.Router()
const PostCreated = require('../events/postCreated')
const axios = require('axios')


router.post('/api/post/general/create', async (req, res) => {
    const { userProfile, postImage, postContent } = req.body

    const post = new GeneralPost(
        {
            userProfile: userProfile,
            postImage: postImage,
            postContent: postContent
        }
    )
    const event = {
        postImage: postImage,
        postContent: postContent
    }
    await post.save()
    PostCreated(post)

    res.json(post)
})

module.exports = router