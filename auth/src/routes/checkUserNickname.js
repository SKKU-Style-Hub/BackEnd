const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
require("dotenv").config()

const router = express.Router()

router.post('/api/auth/check/nickname', async (req, res) => {
    const { userNickname } = req.body


    // Error Handlinga
    const existingUser = await User.findOne({ userNickname: userNickname });
    if (existingUser) {
        res.send('사용중인 이름입니다.')
    } else {
        res.send('사용가능한 이름입니다.')
    }
})

module.exports = router
