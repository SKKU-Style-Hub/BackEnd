const express = require('express');
const mongoose = require('mongoose');
const CreatePostTopic = require('./kafkaClient/createTopic')
const ConsumeFeed = require('./kafkaClient/conFeedFromGeneralPost')

const app = express();
const port = 8080;

const CreatePost = require('./routes/createPost')
const DeletePost = require('./routes/deletePost')
const UpdatePost = require('./routes/updatePost');


// post topic 생성
CreatePostTopic('generalPost')
ConsumeFeed()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(CreatePost)
app.use(DeletePost)
app.use(UpdatePost)


mongoose.connect("mongodb://generalpostdb/post", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('GeneralPostDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })


app.listen(port, () => {
    console.log("General Post MNGT Service is Running")
})