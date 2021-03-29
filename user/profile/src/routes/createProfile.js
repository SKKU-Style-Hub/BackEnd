const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

// 초기 회원가입
router.post('/api/profile/create', async (req, res) => {
    const { userProfile, age, birthday, gender, profileImage } = req.body

    const userNickname = userProfile.userNickname

    const profile = new Profile({
        userNickname: userNickname,
        age: age,
        birthday: birthday,
        gender: gender,
        profileImage: profileImage
    })

    await profile.save()
    res.send()
})

module.exports = router