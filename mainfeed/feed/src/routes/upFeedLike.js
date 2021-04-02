const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()
const UpFeedLikeGeneralPost = require('../events/UpFeedLikeGeneralPost')
const UpFeedLikeStylingPost = require('../events/UpFeedLikeStylingPost')


router.post('/api/mainfeed/like/up', async (req, res) => {
    console.log("Like + 1")
    const { userProfile, feedId } = req.body
    const feed = await MainFeed.findOne({ feedId: feedId })
    const contentType = feed.contentType

    await MainFeed.findOneAndUpdate({ feedId: feedId }, { $push: { likes: userProfile } })

    if (contentType === 'general') {
        UpFeedLikeGeneralPost({
            generalPostId: feed.content.generalPostId,
            userProfile: userProfile
        })
    } else {
        UpFeedLikeStylingPost({
            stylingPostId: feed.content.stylingPostId,
            userProfile: userProfile
        })
    }
    res.send("Like +1 Succeed")
})

module.exports = router