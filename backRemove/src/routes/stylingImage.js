const express = require('express')
const router = express.Router()
const fs = require('fs')
const request = require('request')
const multer = require('multer')

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


router.post('/api/image/process/styling/image', upload.single('file'), (req, res) => {
    console.log('Styling Image Decode')
    const { userNickname } = req.body


    // fs.writeFile(`${userNickname}.png`, base64Image, { encoding: 'base64' }, function (err) {
    //     console.log('File created');
    // });

    fs.writeFile(`/usr/src/app/src/styling/${userNickname}.png`, function (err) {
        console.log('Styling Image created');
    });
})

module.exports = router








