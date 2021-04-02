const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()
const GeneralFeedDeleted = require('../events/GeneralFeedDeleted')
const StylingFeedDeleted = require('../events/StylingFeedDeleted')


router.post('/api/mainfeed/delete', async (req, res) => {
    // Feed 삭제 시 포스트 내용 삭제해야 하는가? 
    const { feedId } = req.body
    const feed = await MainFeed.findOne({ feedId: feedId })
    if (feed.contentType === 'general') {
        await MainFeed.deleteOne({ feedId: feedId })
        GeneralFeedDeleted({ generalPostId: feed.content.generalPostId })
    } else {
        await MainFeed.deleteOne({ feedId: feedId })
        StylingFeedDeleted({ stylingPostId: feed.content.stylingPostId })
    }
    res.send()
})

module.exports = router