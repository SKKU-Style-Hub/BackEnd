const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/delete', async (req, res) => {
    const { stylingRequestId } = req.body
    await Request.deleteOne({ stylingRequestId: stylingRequestId })
    res.send()
})

module.exports = router