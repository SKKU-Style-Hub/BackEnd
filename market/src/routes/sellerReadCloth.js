const express = require('express')
const router = express.Router()
const Cloth = require('../models/cloth')

router.post('/api/market/read/seller', async (req, res) => {
    const { query } = req.body
    const result = await Cloth.find(query)
    res.json(result)
})

module.exports = router