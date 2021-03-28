const express = require('express')
const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/api/auth/signin', async (req, res) => {
    const { userNickName, password } = req.body

    const existingUser = await User.findOne({ userNickName });

    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
        jwt.sign({
            userNickName: existingUser.userNickName,
            gender: existingUser.gender,
            profileImage: existingUser.profileImage,
            role: existingUser.role,
            age: existingUser.age
        }, process.env.JWT_KEY, (err, token) => {
            res.json({
                token
            })
        });
    } else {
        res.send('이름/비밀번호를 다시 입력해주세요')
    }
})


module.exports = router