const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/create/cloth', async (req, res) => {
    const { userProfile, clothing } = req.body
    // 옷 객체 배열에 새롭게 저장
    await Closet.findOneAndUpdate({ "userProfile.userNickname": userProfile.userNickname }, { $push: { clothingArray: clothing } })
    res.send()
})

module.exports = router
