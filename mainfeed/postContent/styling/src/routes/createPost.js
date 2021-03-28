const express = require('express')
const Post = require('../models/content')
const StylingPostCreated = require('../events/StylingPostCreated')
require("dotenv").config()

const router = express.Router()

// StylingPostCreated Event Emitted
router.post('/api/post/styling/create', async (req, res) => {

    const { userProfile, stylingRequest } = req.body

    const post = new Post({
        userProfile: userProfile,
        stylingRequest: stylingRequest
    })
    await post.save()
    StylingPostCreated(post)
    res.send();
})


module.exports = router