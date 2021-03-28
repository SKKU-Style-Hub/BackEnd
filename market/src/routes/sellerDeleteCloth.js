const express = require('express')
const router = express.Router()
const Cloth = require('../models/cloth')

router.post('/api/market/delete/seller', async (req, res) => {
    const { clothId } = req.body
    await Cloth.deleteOne({ _id: clothId })
    res.json()
})

module.exports = router