const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/create/count', async (req, res) => {
    const { updatedStylingPost } = req.body

    // Array 인 객체들의 업데이트 여부 다시 살필 필요 있음
    const stylingRequestId = updatedStylingPost.stylingRequest.stylingRequestId
    await Request.findOneAndUpdate({ stylingRequestId: stylingRequestId }, { $inc: { resultCounter: 1 } })
    console.log(`${stylingRequestId} - Result Counter + 1`)
    res.send()
})

module.exports = router