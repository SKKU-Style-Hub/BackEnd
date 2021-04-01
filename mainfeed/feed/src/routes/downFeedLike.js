const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()
const DownFeedLike = require('../events/DownFeedLike')


router.post('/api/mainfeed/like/down', async (req, res) => {
    console.log("Like - 1")
    const { userProfile, feedId } = req.body
    const feed = await MainFeed.findOne({ feedId: feedId })
    const contentType = feed.contentType

    await MainFeed.findOneAndUpdate({ feedId: feedId }, { $pull: { likes: { userNickname: userProfile.userNickname } } })

    // if (contentType === 'general') {
    //     DownFeedLike({
    //         generalPostId: feed.content.generalPostId,
    //         userProfile: userProfile
    //     })
    // } else {
    //     DownFeedLike({
    //         stylingPostId: feed.content.stylingPostId,
    //         userProfile: userProfile
    //     })
    // }


    res.send("Like -1 Succeed")
})

module.exports = router