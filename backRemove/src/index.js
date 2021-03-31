const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080

const RemoveBack = require('./routes/removeBack')
// const StylingImage = require('./routes/stylingImage')


// const CreateTopic = require('./kafkaClient/createTopic')
// const ConsumeStylingResponse = require('./kafkaClient/conStylingResponseFromImageProcess')

// CreateTopic('imageProcess')
// ConsumeStylingResponse()

app.use(express.json({
    limit: "10mb"
}))
app.use(express.urlencoded({ extended: false }))
// Express 정적 파일 제공 미들웨어 ( public 폴더 내부에서 파일 탐색)
app.use(express.static('src'));


// mongoose.connect("mongodb://imageprocessdb/image", { useNewUrlParser: true, useUnifiedTopology: true });
// // 연결확인 -> Event Listner
// mongoose.connection
//     .once('open', () => console.log('ClosetDB Connected'))
//     .on('error', (err) => {
//         console.log("Your error is ", err)
//     })

app.use(RemoveBack)

// post 는 userProfile 속 userNickname 과 clothID 활용
app.post('/api/image/process/get', (req, res) => {
    console.log('get image')
    const { userProfile, clothingId } = req.body
    const userNickname = userProfile.userNickname

    res.sendFile(__dirname + `/removed/${userNickname + "_" + clothingId}.png`)
})

app.listen(port, () => {
    console.log("Image Processing Service")
})
