const express = require('express')
const app = express()
const port = 8080;



const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeCloset = require('./kafkaClient/conClosetFromClothing')


CreateTopic('userClothing')
ConsumeCloset()


const CreateClothing = require('./routes/createClothing')
const UpdateClothing = require('./routes/updateClothing')
const ReadClothing = require('./routes/readClothing')
const DeleteClothing = require('./routes/deleteClothing')



const mongoose = require('mongoose')

mongoose.connect("mongodb://userclothingdb/clothing", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('MainfeedDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(CreateClothing)
app.use(UpdateClothing)
app.use(ReadClothing)
app.use(DeleteClothing)

app.listen(port, () => {
    console.log('Cloth Service is Running')
})

