const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
require('dotenv').config()
const verifyToken = require('../middlewares/verifytoken')

router.use(express.json())

router.post('/api/auth/currentuser', verifyToken, (req, res) => {
    jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
        if (err) {
            res.send('Token is forbidden')
        } else {
            res.json(
                {
                    message: 'Current User',
                    authData
                }
            )
        }
    })
})

module.exports = router