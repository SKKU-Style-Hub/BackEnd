const express = require('express');
const mongoose = require('mongoose');

const CreateFeedTopic = require('./kafkaClient/createTopic')
const ConsumeGeneralPost = require('./kafkaClient/conGeneralPostFromFeed')
const ConsumeStylingPost = require('./kafkaClient/conStylingPostFromFeed')
const ConsumeComment = require('./kafkaClient/conCommentFromFeed')

const UpdateMainFeedList = require('./routes/updateFeedList')
const ReadMainFeedList = require('./routes/readFeedList')
const CreateFeed = require('./routes/createFeed')
const DeleteFeed = require('./routes/deleteFeed')
const CreateFeedComment = require('./routes/createFeedComment')
const CreateStylingResult = require('./routes/createStylingResponse')
const UpdateFeedComment = require('./routes/updateFeedComment')
const UpFeedLike = require('./routes/upFeedLike')
const DownFeedLike = require('./routes/downFeedLike')
const ReadMyFeedListByContentType = require('./routes/readMyFeedListByContentType')

const app = express();
const port = 8080;

// feed topic 생성
CreateFeedTopic('feed')
// General Post Topic 구독
ConsumeGeneralPost()
// Styling Request Topic 구독
ConsumeStylingPost()
// ConsumeStylingResponse()
ConsumeComment()

app.use(express.json({
    limit: "10mb"
}))
app.use(express.urlencoded({ extended: false }))

app.use(UpdateMainFeedList)
app.use(ReadMainFeedList)
app.use(CreateFeed)
app.use(DeleteFeed)
app.use(CreateFeedComment)
app.use(CreateStylingResult)
app.use(UpdateFeedComment)
app.use(UpFeedLike)
app.use(DownFeedLike)
app.use(ReadMyFeedListByContentType)

mongoose.connect("mongodb://mainfeeddb/mainfeed", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('MainfeedDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })



app.listen(port, () => {
    console.log('Feed Service is Running')
})


