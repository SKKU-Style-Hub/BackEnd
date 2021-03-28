const express = require('express')
const router = express.Router()
const Response = require('../models/response')
const StylingResponseCreated = require('../events/StylingResponseCreated')

router.post('/api/styling/response/create', async (req, res) => {
    const { requestorProfile, stylistProfile, stylingPostId, components } = req.body

    const stylingResponse = new Response({
        requestorProfile: requestorProfile,
        stylistProfile: stylistProfile,
        stylingPostId: stylingPostId,
        components: components
    })
    await stylingResponse.save()
    StylingResponseCreated(stylingResponse)
    res.json(stylingResponse)
})

module.exports = router
