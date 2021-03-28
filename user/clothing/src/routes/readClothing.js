const express = require('express');
// const verifyToken = require('../middlewares/verifytoken')
const Clothing = require('../models/clothing')
const router = express.Router();


router.post('/api/clothing/read', async (req, res) => {
    // Error Handling
    // 1. 소비자가 옷 등록 시 productl_id 없다 ( 옷 등록 시 이름 기입하는 것 필요? )
    const { clothingId } = req.body

    res.send(await Clothing.findOne({ _id: clothingId }))
})

module.exports = router

