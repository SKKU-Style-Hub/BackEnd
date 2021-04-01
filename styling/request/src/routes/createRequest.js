const express = require('express')
const router = express.Router()
const Request = require('../models/request')
const StylingRequestCreated = require('../events/StylingRequestCreated')

router.post('/api/styling/request/create', async (req, res) => {
    const { userProfile, requestClothings, budgetMin, budgetMax, requestItems, requestStyle, requestContent } = req.body

    const stylingRequest = new Request({
        userProfile: userProfile,
        requestClothings: requestClothings,
        budgetMin: budgetMin,
        budgetMax: budgetMax,
        requestItems: requestItems,
        requestStyle: requestStyle,
        requestContent: requestContent
    })
    await stylingRequest.save()
    StylingRequestCreated(stylingRequest)
    res.json(stylingRequest)
})

module.exports = router
