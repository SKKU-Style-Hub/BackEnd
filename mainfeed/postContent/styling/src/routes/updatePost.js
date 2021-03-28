const express = require('express')
const jwt = require('jsonwebtoken')
const Post = require('../models/content')
require("dotenv").config()

const router = express.Router()

// StylingPostCreated Event Emitted
router.post('/api/post/styling/update', async (req, res) => {

})


module.exports = router