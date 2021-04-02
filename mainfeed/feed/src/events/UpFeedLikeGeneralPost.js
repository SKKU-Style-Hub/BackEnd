const producer = require('../kafkaClient/producer')

const UpFeedLikeGeneralPost = (msg) => {
    producer('UpFeedLikeGeneralPost', msg)
    console.log(msg)
}

module.exports = UpFeedLikeGeneralPost