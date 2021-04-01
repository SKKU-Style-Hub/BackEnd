const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8080

const CreatePost = require('./routes/createPost')
const ReadPost = require('./routes/readPost')
const UpdatePost = require('./routes/updatePost')
const DeletePost = require('./routes/deletePost')
const UpdateResponse = require('./routes/updateResponse')
const ReadMyPostList = require('./routes/readMyPostList')


const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeFeed = require('./kafkaClient/conFeedFromStylingPost')
const ConsumeStylingRequest = require('./kafkaClient/conStylingRequestFromStylingPost')
const ConsumeStylingResponse = require('./kafkaClient/conStylingResponseFromStylingPost')

CreateTopic('stylingPost')
ConsumeStylingResponse()
ConsumeFeed()
ConsumeStylingRequest()



mongoose.connect("mongodb://stylingpostdb/post", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('StylingPostDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })


// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routers
app.use(CreatePost)
app.use(DeletePost)
app.use(UpdatePost)
app.use(UpdateResponse)
app.use(ReadMyPostList)
app.use(ReadPost)


app.listen(port, () => {
    console.log('Styling Post MNGT is running')
})


