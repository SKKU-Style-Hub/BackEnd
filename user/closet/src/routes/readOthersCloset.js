const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/read/others', async (req, res) => {
    const { userProfile, othersProfile } = req.body
    const result = await Closet.findOne({ "userProfile.userNickname": othersProfile.userNickname })
    res.json(result)
})

module.exports = router
