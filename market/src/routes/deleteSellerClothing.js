const express = require('express')
const router = express.Router()
const MarketClothing = require('../models/clothing')

router.post('/api/market/seller/delete', async (req, res) => {
    const { marketClothingId } = req.body
    await MarketClothing.deleteOne({ marketClothingId: marketClothingId })
    res.json()
})

module.exports = router