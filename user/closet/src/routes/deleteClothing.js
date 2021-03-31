const express = require('express')
const Closet = require('../models/closet')
const ClosetClothingDeleted = require('../events/closetClothingDeleted')
const router = express.Router()

router.post('/api/closet/delete/clothing', async (req, res) => {
    const { closetId, clothingId } = req.body
    await Closet.findOneAndUpdate({ "closetId": closetId },
        { $pull: { "clothingArray.clothingId": clothingId } })
    ClosetClothingDeleted({
        clothingId: clothingId
    })
    console.log('Delete Clothing')
    res.send()
})

module.exports = router