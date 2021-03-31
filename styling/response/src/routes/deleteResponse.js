const express = require('express')
const router = express.Router()
const Response = require('../models/response')
const StylingResponseDeleted = require('../events/StylingResponseDeleted')

router.post('/api/styling/response/delete', async (req, res) => {
    const { responseId, stylingId } = req.body
    const query = {
        responseId: responseId,
        stylingId: stylingId
    }
    await stylingResponse.findOneAndDelete(query)
    StylingResponseDeleted(query)
    res.json(temp)
})

module.exports = router