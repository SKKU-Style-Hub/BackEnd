const express = require('express')
const router = express.Router()
const MarketClothing = require('../models/clothing')

router.post('/api/market/seller/read', async (req, res) => {
    const { marketClothingId } = req.body
    const result = await MarketClothing.findOne({
        marketClothingId: marketClothingId
    })
    res.json(result)
})

module.exports = router