const express = require('express');
// const verifyToken = require('../middlewares/verifytoken')
const Clothing = require('../models/clothing')
const router = express.Router();
const UserClothingCreated = require('../events/UserClothingCreated')

router.post('/api/clothing/create', async (req, res) => {
    const { userProfile, tagResult, clothingImage } = req.body

    const clothing = new Clothing({
        userProfile: userProfile,
        tagResult: tagResult,
        clothingImage: clothingImage
    })
    await clothing.save()
    console.log(clothing)
    UserClothingCreated(clothing)
    res.json(clothing.clothingId)
})

module.exports = router


    // Error Handling
    // 1. 소비자가 옷 등록 시 productl_id 없다 ( 옷 등록 시 이름 기입하는 것 필요? )
    // const clothing = new Clothing({
    //     userProfile: req.body.userProfile,
    //     clothingImg: req.body.clothingImg,
    //     category: req.body.category,
    //     color: req.body.color,
    //     pattern: req.body.pattern,
    //     colorDetail: req.body.colorDetail,
    //     print: req.body.print,
    //     look: req.body.look,
    //     texture: req.body.texture,
    //     detail: req.body.detail,
    //     length: req.body.length,
    //     sleeveLength: req.body.sleeveLength,
    //     neckLine: req.body.neckLine,
    //     fit: req.body.fit,
    //     shape: req.body.shape,
    //     brandName: req.body.brandName,
    // })

