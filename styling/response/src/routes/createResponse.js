const express = require('express')
const router = express.Router()
const Response = require('../models/response')
const StylingResponseCreated = require('../events/StylingResponseCreated')

router.post('/api/styling/response/create', async (req, res) => {
    const { requestorProfile, stylistProfile, stylingPostId, components, stylingImage } = req.body


    // 이미지를 base64로 받기
    StylingImageCreated({
        stylingPostId: stylingPostId,
        stylistProfile: stylistProfile,
        stylingImage: stylingImage
    })

    const stylingResponse = new Response({
        stylingImage: stylingImage,
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