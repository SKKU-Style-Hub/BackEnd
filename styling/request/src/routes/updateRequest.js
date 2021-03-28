const express = require('express')
const router = express.Router()
const Request = require('../models/request')

router.post('/api/styling/request/update', async (req, res) => {
    const { requestId, requestCloths, budgetMin, budgetMax, requestItems, requestStyle, requestContent, } = req.body

    const updateRequest = {}
    if (requestCloths !== undefined) {
        updateRequest.requestCloths = requestCloths
    }
    if (budgetMin !== undefined) {
        updateRequest.budgetMin = budgetMin
    }
    if (budgetMax !== undefined) {
        updateRequest.budgetMax = budgetMax
    }
    if (requestItems !== undefined) {
        updateRequest.requestItems = requestItems
    }
    if (requestStyle !== undefined) {
        updateRequest.requestStyle = requestStyle
    }
    if (requsetContent !== undefined) {
        updateRequest.requsetContent = requsetContent
    }

    // Array 인 객체들의 업데이트 여부 다시 살필 필요 있음
    await Request.findOneAndUpdate({ _id: requestId }, updateRequest)

    res.send()
})

module.exports = router