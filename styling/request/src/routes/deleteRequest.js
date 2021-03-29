const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/delete', async (req, res) => {
    const { userProfile, requestId } = req.body
    const userNickname = userProfile.userNickname
    await Request.deleteOne({ "userProfile.userNickname": userNickname, _id: requestId })
    res.send()
})

module.exports = router