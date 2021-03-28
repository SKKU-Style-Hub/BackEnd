const express = require('express')
const User = require('../models/user')
const router = express.Router()


router.post('/api/auth/userprofile', async (req, res) => {
    const { userNickName } = req.body
    // Error Handling
    const existingUser = await User.findOne({ userNickName });
    res.json(existingUser)
})

module.exports = router
