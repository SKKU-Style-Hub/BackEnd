const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/update/clothing', async (req, res) => {
    const { userProfile, updatedClothing } = req.body
    await Closet.findOneAndUpdate({ "userProfile.userNickname": userProfile.userNickname, "clothing._id": updatedCloth._id },
        { 'clothing.$': updatedClothing })
    // 쿼리 결과로 나온 옷만 변경
    res.send()
})

module.exports = router