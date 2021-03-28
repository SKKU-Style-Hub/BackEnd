const express = require('express')
const MainFeed = require('../models/mainfeed')
const router = express.Router()
const GeneralFeedDeleted = require('../events/GeneralFeedDeleted')
const StylingFeedDeleted = require('../events/StylingFeedDeleted')


router.post('/api/mainfeed/delete', async (req, res) => {
    const { feedId } = req.body
    const feed = await MainFeed.findOne({ _id: feedId })
    if (feed.contentType === 'general') {
        await MainFeed.deleteOne({ _id: feedId })
        GeneralFeedDeleted({ feedId: feed.content._id })
    } else {
        await MainFeed.deleteOne({ _id: feedId })
        StylingFeedDeleted({ feedId: feed.content._id })
    }
    res.send()
})

module.exports = router