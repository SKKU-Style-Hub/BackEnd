const express = require('express')
const GeneralPost = require('../models/content')
const router = express.Router()


router.post('/api/post/general/update', async (req, res) => {
    const { _id, updateImage, udpateContent } = req.body

    const query = {
        _id: _id
    }

    // TODO : 이미지랑 컨텐츠 구분해서 변경? 
    const updateQuery = {
        postImage: undefined,
        postContent: undefined,
    }
    if (updateImage !== undefined) {
        updateQuery.postImage = updateImage
    }
    if (udpateContent !== undefined) {
        updateQuery.postContent = udpateContent
    }

    if (updateQuery.postImage !== undefined || updateQuery.postContent !== undefined) {
        await GeneralPost.findOneAndUpdate(query, updateQuery)
    }


    res.send()
})

module.exports = router