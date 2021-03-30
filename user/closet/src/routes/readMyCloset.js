const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/read/my', async (req, res) => {
    const { userProfile } = req.body
    const result = await Closet.findOne({ "userProfile.userNickname": userProfile.userNickname })
    res.json(result)
})

module.exports = router
