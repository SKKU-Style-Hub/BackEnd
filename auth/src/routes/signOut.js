const express = require('express')
const router = express.Router()

router.get('/api/auth/signout', (req, res) => {
    const { token } = req.body;
    // refreshToken 은 어떻게 관리하는지?    
    refreshTokens = refreshTokens.filter(token => t !== token);

    res.send("Logout successful");
})




module.exports = router