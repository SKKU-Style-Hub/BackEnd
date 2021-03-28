const express = require('express')
const app = express()
const RemoveBack = require('./routes/removeBack')
// const GetImage = require('./routes/getImage')
const port = 8000


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Express 정적 파일 제공 미들웨어 ( public 폴더 내부에서 파일 탐색)
app.use(express.static('src'));


app.use(RemoveBack)

// post 는 userProfile 속 userNickName 과 clothID 활용
app.post('/api/image/process/get', (req, res) => {
    const { userProfile, clothId } = req.body
    const userNickName = userProfile.userNickName

    res.sendFile(__dirname + `/removed/${userNickName + "_" + clothId}.png`)
})

app.listen(port, () => {
    console.log("Image Processing Service")
})
