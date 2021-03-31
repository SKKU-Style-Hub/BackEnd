const express = require('express')
const Closet = require('../models/closet')
const router = express.Router()

router.post('/api/closet/create/clothing', async (req, res) => {
    const { userProfile, clothing } = req.body
    // 옷 객체 배열에 새롭게 저장

    console.log('Closet create clothing')
    if (await Closet.findOneAndUpdate({ "userProfile.userNickname": userProfile.userNickname }, { $push: { clothingArray: clothing } })) {

    } else {

        delete clothing.userProfile

        const initCloset = new Closet({
            userProfile: userProfile,
            clothingArray: clothing
        })
        await initCloset.save()
        res.json(initCloset)
    }
})

module.exports = router
