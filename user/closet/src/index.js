const express = require('express')
const app = express()
const port = 8080

const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeUserClothing = require('./kafkaClient/conUserClothingFromCloset')

const CreateClothing = require('./routes/createClothing')
const DeleteClothing = require('./routes/deleteClothing')
const UpdateClothing = require('./routes/updateClothing')
const ReadMyCloset = require('./routes/readMyCloset')
const ReadOthersCloset = require('./routes/readOthersCloset')


const mongoose = require('mongoose')

mongoose.connect("mongodb://closetdb/closet", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('ClosetDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

// 토픽 생성
CreateTopic('closet')
// Clothing 구독
ConsumeUserClothing()


app.use(express.json({
    limit: "10mb"
}))
app.use(express.urlencoded({ extended: false }))

app.use(CreateClothing)
app.use(DeleteClothing)
app.use(UpdateClothing)
app.use(ReadMyCloset)
app.use(ReadOthersCloset)

app.listen(port, () => {
    console.log('Closet MNGT is Running')
})
