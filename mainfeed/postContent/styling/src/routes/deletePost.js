const express = require('express')
const jwt = require('jsonwebtoken')
const Post = require('../models/content')
const StylingPostDeleted = require('../events/StylingPostDeleted')
require("dotenv").config()

const router = express.Router()

// StylingPostCreated Event Emitted
router.post('/api/post/styling/delete', async (req, res) => {
    const { stylingPostId } = req.body
    await Post.deleteOne({ _id: stylingPostId })
    StylingPostDeleted({ stylingPostId: stylingPostId })
    res.send();
})


module.exports = router