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
const UpdateRequest = require('./routes/updateRequest')
const GetMyRequestList = require('./routes/getMyRequestList')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(CreateRequest)
app.use(DeleteRequest)
app.use(ReadRequest)
app.use(UpdateRequest)
app.use(GetMyRequestList)


mongoose.connect("mongodb://stylingrequestdb/request", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('Market DB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

app.listen(port, () => {
    console.log('Styling Request is Running')
})

