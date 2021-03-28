const express = require('express');
// const verifyToken = require('../middlewares/verifytoken')
const Clothing = require('../models/clothing')
const router = express.Router();


router.post('/api/clothing/delete', async (req, res) => {
    const { clothingId } = req.body
    await Clothing.findOneAndDelete({ _id: clothingId })
    res.send()
})

module.exports = router

