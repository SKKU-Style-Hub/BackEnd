const express = require('express')
const router = express.Router()
const fs = require('fs')
const request = require('request')
const multer = require('multer')
const path = require('path')
const RemBg = require('../models/image')
const { Storage } = require('@google-cloud/storage')

// Multer Default -> 보안을 위해 파일명 및 확장자 변경
// const upload = multer({ dest: 'uploads/' });

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './src/uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname) //file.originalname);
        }
    }),
});

router.post('/api/back/removal/remove', upload.single('file'), async (req, res) => {

    const gc = new Storage({
        keyFilename: path.join(__dirname, './spark-308723-6c9758b9bb5c.json'),
        projectId: 'spark-308723'
    })

    const bucket = gc.bucket('sparkspark')


    console.log('Image Background Removal')
    const { userNickname } = req.body

    const imageData = new RemBg({
        userNickname: userNickname
    })

    await imageData.save()

    const imageIdList = await RemBg.find().sort({ imageId: -1 }).limit(1)
    const imageId = imageIdList[0].imageId

    console.log('start')
    console.log(req.file.path)
    console.log(`/usr/src/app/${req.file.path}`)
    var formdata = {
        submit: 'upload',
        file: fs.createReadStream(`/usr/src/app/${req.file.path}`)
    }


    const imageFileName = `${userNickname + "_" + imageId}.png`

    request.post({ url: 'http://14.49.45.139:443', formData: formdata }, (req, res) => {
        console.log('Request Posting')
    }).pipe(await bucket.file(`${imageFileName}`).createWriteStream({}))
    //.pipe(await fs.createWriteStream(path.join(__dirname, `../removed/${imageFileName}`)))


    // await fs.createReadStream(path.join(__dirname, `../removed/${imageFileName}`))
    //     .pipe(bucket.file(`${imageFileName}`).createWriteStream({
    //         resumable: false,
    //         gzip: true
    //     }))
    //     .on('error', function (err) { })
    //     .on('finish', function () {
    //         console.log("upload finish")
    //     });

    // await gc.bucket('sparkspark').upload(path.join(__dirname, `../removed/${imageFileName}`), {
    //     destination: imageFileName,
    // }).then().catch((err) => console.log(err))

    res.send(`https://storage.googleapis.com/sparkspark/${imageFileName}`)
})

module.exports = router








