const express = require('express')
const router = express.Router()
const fs = require('fs')
const request = require('request')
const multer = require('multer')
const path = require('path')

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

router.post('/api/image/process/remove', upload.single('file'), (req, res) => {
    const { userNickame, clothingId } = req.body
    console.log(req.file)

    var formdata = {
        submit: 'upload',
        file: fs.createReadStream(`./${req.file.path}`)
    }

    request.post({ url: 'http://14.49.45.139:443', formData: formdata }, (req, res) => {

    }).pipe(fs.createWriteStream(`./src/removed/${userNickame + "_" + clothingId}.png`))
    res.send()
})

module.exports = router








