const producer = require('../kafkaClient/producer')

const UpFeedLikeStylingPost = (msg) => {
    producer('UpFeedLikeStylingPost', msg)
    console.log(msg)
}

module.exports = UpFeedLikeStylingPost