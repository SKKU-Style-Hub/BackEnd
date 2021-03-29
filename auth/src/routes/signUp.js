const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
require("dotenv").config()

const router = express.Router()

const users = []

router.post('/api/auth/signup', async (req, res) => {
    const { userNickname, password, gender, age } = req.body
    const user_info = {
        userNickname: userNickname,
        password: password,
        gender: gender,
        age: age,
        role: 'user'
    }
    users.push(user_info)
    console.log(users)

    // Error Handling
    const existingUser = await User.findOne({ userNickname });
    if (existingUser) {
        res.send('사용중인 이름입니다.')
    } else {
        flag = true;
        for (var key in user_info) {
            if (user_info[key] == undefined) {
                flag = false
                res.send('정보 입력을 완료해주세요')
                break
            }
        }
        if (flag) {
            const hashedPassword = await bcrypt.hash(password, 10)
            user_info.password = hashedPassword
            console.log(hashedPassword)
            user = new User(user_info)
            user.save()
            // Generate JWT + Send JWT
            jwt.sign({
                userNickname: user.userNickname,
                role: user.role
            }, process.env.JWT_KEY, (err, token) => {
                res.json({
                    token
                })
            });
        }
    }
})

module.exports = router
