const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/read', async (req, res) => {
    const { userProfile, targetUserProfile } = req.body

    if (targetUserProfile === undefined) {
        const result = await Closet.findOne({ "userProfile.userNickname": userProfile.userNickname })
        res.json(result)
    } else {
        await Closet.findOne({ "userProfile.userNickname": targetUserProfile.userNickname })
        res.json(result)
    }
})

module.exports = router
