const express = require('express')
const router = express.Router()
const Response = require('../models/response')
const StylingResponseCreated = require('../events/StylingResponseCreated')
const fs = require('fs')

router.post('/api/styling/response/create', async (req, res) => {
    const { requestorProfile, stylistProfile, stylingPostId, components, stylingImage } = req.body


    // Base64 -> Image 변환
    const base64Image = stylingImage.split(';base64,').pop();


    const stylistNickname = stylistProfile.userNickname
    // 최신 response 번호 ( unique ) -> 한 요청에 제안 여러번 참여 가능
    const lastStylingResponse = await Response.find().sort({ stylingResponseId: -1 }).limit(1)
    const lastStylingResponseId = lastStylingResponse[0].stylingResponseId + 1
    const imageFileName = `${stylingPostId}_${stylistNickname}_${lastStylingResponseId}.png`


    fs.writeFile(`./src/image/${imageFileName}`, base64Image, { encoding: 'base64' }, function (err) {
        console.log(`${imageFileName} Created`);
    });


    const stylingResponse = new Response({
        stylingImage: imageFileName,
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