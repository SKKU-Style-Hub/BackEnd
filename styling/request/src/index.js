const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')


const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeStylingPost = require('./kafkaClient/conStylingPostFromStylingRequest')

CreateTopic('stylingRequest')
ConsumeStylingPost()

const CreateRequest = require('./routes/createRequest')
const DeleteRequest = require('./routes/deleteRequest')
const ReadRequest = require('./routes/readRequest')
const CreateCount = require('./routes/createCount')
const GetMyRequestList = require('./routes/getMyRequestList')

app.use(express.json(
    { limit: "10mb" }
))
app.use(express.urlencoded({ extended: false }))
app.use(CreateRequest)
app.use(DeleteRequest)
app.use(ReadRequest)
app.use(CreateCount)
app.use(GetMyRequestList)


mongoose.connect("mongodb://stylingrequestdb/request", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('Market DB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

app.listen(port, () => {
    console.log('Styling Request is Running')
})

