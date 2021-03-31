const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/read/my', async (req, res) => {
    const { closetId } = req.body
    const result = await Closet.findOne({ "closetId": closetId })
    res.json(result)
})

module.exports = router
