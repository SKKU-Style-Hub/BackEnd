const express = require('express')
const app = express()
const RemoveBack = require('./routes/removeBack')
// const GetImage = require('./routes/getImage')
const port = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Express 정적 파일 제공 미들웨어 ( public 폴더 내부에서 파일 탐색)
app.use(express.static('src'));


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
