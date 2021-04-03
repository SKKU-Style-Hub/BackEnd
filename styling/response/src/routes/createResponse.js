const express = require('express')
const router = express.Router()
const Response = require('../models/response')
const StylingResponseCreated = require('../events/StylingResponseCreated')
const fs = require('fs')
const { Storage } = require('@google-cloud/storage')
const path = require('path')





router.post('/api/styling/response/create', async (req, res) => {


    console.log(__dirname)
    const gc = new Storage({
        keyFilename: path.join(__dirname, "./spark-308723-6c9758b9bb5c.json"),
        projectId: 'spark-308723'
    })

    console.log(path.join(__dirname, "./spark-308723-6c9758b9bb5c.json"))


    const { requestorProfile, stylistProfile, stylingPostId, components, stylingImage } = req.body


    // Base64 -> Image 변환
    const base64Image = stylingImage.split(';base64,').pop();


    const stylistNickname = stylistProfile.userNickname

    // 최신 response 번호 ( unique ) -> 한 요청에 제안 여러번 참여 가능
    var lastStylingResponseId = 0
    await Response.find().sort({ stylingResponseId: -1 }).limit(1)
        .then((result) => {
            try {
                lastStylingResponseId = result[0].stylingResponseId + 1
            } catch { }
        })
        .catch()

    // if (lastStylingResponse.length !== 0) {
    //     lastStylingResponseId = lastStylingResponse[0].stylingResponseId + 1
    // }

    const imageFileName = `${stylingPostId}_${stylistNickname}_${lastStylingResponseId}.png`

    const filePath = `./src/image/${imageFileName}`


    fs.writeFile(filePath, base64Image, { encoding: 'base64' }, function (err) {
        console.log(`${imageFileName} Created`);
    });

    console.log(filePath)

    gc.getBuckets().then(x => console.log(x))

    await gc.bucket('sparkspark').upload(path.join(__dirname, `../image/${imageFileName}`), {
        destination: imageFileName,
    });

    const imageURL = `https://storage.googleapis.com/sparkspark/${imageFileName}`

    const stylingResponse = new Response({
        stylingImage: imageURL,
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