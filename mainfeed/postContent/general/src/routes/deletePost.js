const express = require('express')
const GeneralPost = require('../models/content')
const router = express.Router()


router.post('/api/post/general/delete', async (req, res) => {
    const { feedId } = req.body

    await GeneralPost.deleteOne({ _id: feedId })
    res.send()
})

module.exports = router