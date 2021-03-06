const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/read', async (req, res) => {
    // 유저 이름으로 요청서 read 하게 만들어야 한다.
    const { stylingRequestId } = req.body

    const result = await Request.findOne({ stylingRequestId: stylingRequestId })
    // request 데이터 객체 json 반환
    res.json(result)
})

module.exports = router