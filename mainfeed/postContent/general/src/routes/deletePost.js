const express = require('express')
const GeneralPost = require('../models/content')
const router = express.Router()


router.post('/api/post/general/delete', async (req, res) => {
    const { generalPostId } = req.body

    await GeneralPost.deleteOne({ generalPostId: generalPostId })
    res.send()
})

module.exports = router