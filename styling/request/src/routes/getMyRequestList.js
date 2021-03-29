const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/list/my', async (req, res) => {
    const { userProfile } = req.body
    const userNickname = userProfile.userNickname
    // 10개씩 -> Reload 시 다음 10개 추가
    const requestList = await Request.find({ "userProfile.userNickname": userNickname }).sort({ "createdAt": -1 }).limit(10)
    res.json(JSON.stringify(requestList))
})

module.exports = router
