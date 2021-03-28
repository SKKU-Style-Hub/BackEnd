const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 8080

const CreateTopic = require('./kafkaClient/createTopic')
const ConsumeFeed = require('./kafkaClient/conFeedFromComment')

// Kafka
CreateTopic('comment')
ConsumeFeed()

const CreateComment = require('./routes/createComment')
const UpdateComment = require('./routes/updateComment')
const DeleteComment = require('./routes/deleteComment')
const DeleteCommentsWithFeed = require('./routes/deleteCommentsWithFeed')
const CreateReply = require('./routes/createReply')
const DeleteReply = require('./routes/deleteReply')
const UpdateReply = require('./routes/updateReply')


mongoose.connect("mongodb://commentdb/comment", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('CommentDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(CreateComment)
app.use(UpdateComment)
app.use(DeleteComment)
app.use(DeleteCommentsWithFeed)
app.use(CreateReply)
app.use(DeleteReply)
app.use(UpdateReply)


app.listen(port, () => {
    console.log('Comment Sevice is Running')
})

