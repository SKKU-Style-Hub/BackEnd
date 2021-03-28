const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/read', async (req, res) => {
    const { userProfile, targetUserProfile } = req.body

    if (targetUserProfile === undefined) {
        const result = await Closet.findOne({ "userProfile.userNickName": userProfile.userNickName })
        res.json(result)
    } else {
        await Closet.findOne({ "userProfile.userNickName": targetUserProfile.userNickName })
        res.json(result)
    }
})

module.exports = router
