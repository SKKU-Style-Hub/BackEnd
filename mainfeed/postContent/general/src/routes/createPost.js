const express = require('express')
const GeneralPost = require('../models/content')
const router = express.Router()
const PostCreated = require('../events/postCreated')
const { Storage } = require('@google-cloud/storage')
const path = require("path")
const fs = require('fs')


router.post('/api/post/general/create', async (req, res) => {
    const { userProfile, postImage, postContent } = req.body


    const gc = new Storage({
        keyFilename: path.join(__dirname, "./spark-308723-6c9758b9bb5c.json"),
        projectId: 'spark-308723'
    })

    // base64 decode, 현재는 이미지 한개만 처리 -> 다중 이미지 처리 관련 서비스 새로 만들어야 할 듯

    const lastGeneralPostId = 0
    const userNickname = userProfile.userNickname
    await GeneralPost.find().sort({ generalPostId: -1 }).limit(1)
        .then((result) => {
            lastGeneralPostId = result[0].generalPostId + 1
        })
        .catch((err) => {
        })

    var base64Image
    var imageFileName
    var filePath
    var imageUrl
    var imageUrlList = []

    for (var imageNumber = 0; imageNumber < postImage.length; imageNumber++) {
        if (postImage[imageNumber].indexOf(';base64')) {
            base64Image = postImage[imageNumber].split(';base64,').pop();
        } else {
            base64Image = postImage[imageNumber]
        }
        imageFileName = `${userNickname}_${lastGeneralPostId}_${imageNumber}.png`
        filePath = `./src/image/${imageFileName}`


        await fs.writeFile(filePath, base64Image, { encoding: 'base64' }, function (err) {
            console.log(`${imageFileName} Created`);
        });

        gc.getBuckets().then(x => console.log(x))

        await gc.bucket('sparkspark').upload(path.join(__dirname, `../image/${imageFileName}`), {
            destination: imageFileName,
        });

        imageUrl = `https://storage.googleapis.com/sparkspark/${imageFileName}`
        imageUrlList.push(iamgeUrl)
    }



    const post = new GeneralPost(
        {
            userProfile: userProfile,
            postImage: imageUrlList,
            postContent: postContent
        }
    )

    await post.save()
    PostCreated(post)

    res.json(post)
})

module.exports = router