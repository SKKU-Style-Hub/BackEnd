const express = require('express')
const app = express()
const port = 8080

const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeUserClothing = require('./kafkaClient/conUserClothingFromCloset')

const CreateCloth = require('./routes/createClothing')
const DeleteCloth = require('./routes/deleteClothing')
const UpdateCloth = require('./routes/updateClothing')
const ReadCloset = require('./routes/readCloset')


const mongoose = require('mongoose')

mongoose.connect("mongodb://closetdb/closet", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('MainfeedDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

// 토픽 생성
CreateTopic('closet')
// Clothing 구독
ConsumeUserClothing()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(CreateCloth)
app.use(DeleteCloth)
app.use(UpdateCloth)
app.use(ReadCloset)

app.listen(port, () => {
    console.log('Closet MNGT is Running')
})
