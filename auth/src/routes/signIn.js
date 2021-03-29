const express = require('express')
const User = require('../models/user')
const router = express.Router()
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
require('dotenv').config()

router.post('/api/auth/signin', async (req, res) => {
    // password는 삭제
    const { userNickname } = req.body

    const existingUser = await User.findOne({ userNickname: userNickname });

    // 디바이스에서 앱 키면 내장 DB에서 보유하고 있는 userNickname 을 DB에서 확인 후 로그인
    if (existingUser) {
        res.json({
            userNickname: existingUser.userNickname,
            gender: existingUser.gender,
            profileImage: existingUser.profileImage,
            role: existingUser.role,
            age: existingUser.age
        })
    }

    // // 로컬 로그인 방식 jwt + password 암호화 방식
    // if (existingUser && await bcrypt.compare(password, existingUser.password)) {
    //     jwt.sign({
    //         userNickname: existingUser.userNickname,
    //         gender: existingUser.gender,
    //         profileImage: existingUser.profileImage,
    //         role: existingUser.role,
    //         age: existingUser.age
    //     }, process.env.JWT_KEY, (err, token) => {
    //         res.json({
    //             token
    //         })
    //     });
    // } else {
    //     res.send('이름/비밀번호를 다시 입력해주세요')
    // }
})


module.exports = router