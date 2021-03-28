const express = require('express')
const Closet = require('../models/closet')
const ClosetClothingDeleted = require('../events/closetClothingDeleted')
const router = express.Router()

router.post('/api/closet/delete/cloth', async (req, res) => {
    const { userProfile, clothingId } = req.body
    await Closet.findOneAndUpdate({ "userProfile.userNickName": userProfile.userNickName },
        { $pull: { "cloths._id": clothingId } })
    ClosetClothingDeleted({
        clothingId: clothingId
    })
    res.send()
})

module.exports = router