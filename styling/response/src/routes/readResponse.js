const express = require('express')
const router = express.Router()
const Response = require('../models/response')

router.post('/api/styling/response/read', async (req, res) => {
    const { stylingResponseId } = req.body
    const stylingResponse = await Response.findOne({ stylingResponseId: stylingResponseId })
    res.json(stylingResponse)
})

module.exports = router