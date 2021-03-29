const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

// 아직 미완성
router.post('/api/profile/update', async (req, res) => {
    const { userProfile, age, birthday, gender, profileImage } = req.body

    const userNickname = userProfile.userNickname
    const query = {}
    if (age !== undefined) {
        query.age = age
    }
    if (birthday !== undefined) {
        query.birthday = birthday
    }
    if (gender !== undefined) {
        query.gender = gender
    }
    if (profileImage !== undefined) {
        query.profileImage = profileImage
    }

    const profile = await Profile.findOneAndUpdate({ userNickname: userNickname }, query)
    res.send()
})

module.exports = router