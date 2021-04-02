const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const bcrypt = require('bcrypt')
require("dotenv").config()

const router = express.Router()

router.post('/api/auth/signup', async (req, res) => {
    const { userNickname, gender, age, profileImage, socialLogin } = req.body

    const user_info = {
        userNickname: userNickname,
        gender: gender,
        age: age,
        profileImage: profileImage, // 없으면 default로 보내면 됨
        role: 'user'
    }

    // Error Handlinga
    // const existingUser = await User.findOne({ userNickname: userNickname });

    const userProfile = {
        userNickname: userNickname,
        gender: gender,
        profileImage: profileImage,
        age: age
    }

    existingUser = await User.findOne({ socialLogin: socialLogin });

    if (socialLogin) {
        res.json({
            userNickname: existingUser.userNickname,
            gender: existingUser.gender,
            profileImage: existingUser.profileImage,
            age: existingUser.age
        })
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
            // 소셜 로그인 사용시 비밀번호 사용 X ( 로컬 회원가입 절차 X )
            // const hashedPassword = await bcrypt.hash(password, 10)
            // user_info.password = hashedPassword
            // console.log(hashedPassword)


            user = new User(user_info)

            if (socialLogin) {
                user.socialLogin = socialLogin
            }

            await user.save()

            res.json(userProfile)
        }

        // if (existingUser) {
        //     res.send('사용중인 이름입니다.')
        // } else {
        // flag = true;
        // for (var key in user_info) {
        //     if (user_info[key] == undefined) {
        //         flag = false
        //         res.send('정보 입력을 완료해주세요')
        //         break
        //     }
        // }
        // if (flag) {
        //     // 소셜 로그인 사용시 비밀번호 사용 X ( 로컬 회원가입 절차 X )
        //     // const hashedPassword = await bcrypt.hash(password, 10)
        //     // user_info.password = hashedPassword
        //     // console.log(hashedPassword)


        //     user = new User(user_info)

        //     if (socialLogin) {
        //         user.socialLogin = socialLogin
        //     }

        //     await user.save()

        // JWT 반환 없이 userProfile 정보 주기
        // Generate JWT + Send JWT
        // jwt.sign({
        //     userNickname: user.userNickname,
        //     role: user.role
        // }, process.env.JWT_KEY, (err, token) => {
        //     res.json({
        //         token
        //     })
        // });

        // 회원가입 완료시 userProfile 정보 주기
        // const userProfile = {
        //     userNickname: userNickname,
        //     gender: gender,
        //     profileImage: profileImage,
        //     age: age
        // }
        // res.json(userProfile)
        // }
    }
})

module.exports = router
