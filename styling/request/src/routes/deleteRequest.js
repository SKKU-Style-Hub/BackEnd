const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/delete', async (req, res) => {
    const { userProfile, requestId } = req.body
    const userNickName = userProfile.userNickName
    await Request.deleteOne({ "userProfile.userNickName": userNickName, _id: requestId })
    res.send()
})

module.exports = router