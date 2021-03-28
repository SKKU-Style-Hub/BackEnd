const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/list/new', async (req, res) => {
    // 10개씩 -> Reload 시 다음 10개 추가
    const requestList = await Request.find().sort({ "createdAt": -1 }).limit(10)
    res.json(JSON.stringify(requestList))
})

module.exports = router