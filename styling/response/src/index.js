const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')

const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeFeed = require('./kafkaClient/conFeedFromStylingResponse')

CreateTopic('stylingResponse')
ConsumeFeed()

const CreateResponse = require('./routes/createResponse')
const DeleteResponse = require('./routes/deleteResponse')
// const UpdateResponse = require('./routes/updateResponse')
// const ReadResponse = require('./routes/readResponse')

app.use(express.json({
    limit: "10mb"
}))
app.use(express.static('src/image'))
app.use(express.urlencoded({ extended: false }))

app.use(CreateResponse)
app.use(DeleteResponse)
// app.use(UpdateResponse)
// app.use(ReadResponse)


mongoose.connect("mongodb://stylingresponsedb/response", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('Response DB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })


app.listen(port, () => {
    console.log('Styling Response is Running')
})