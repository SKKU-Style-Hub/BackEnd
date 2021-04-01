const producer = require('../kafkaClient/producer')

const UpFeedLike = (msg) => {
    producer('UpFeedLike', msg)
    console.log(msg)
}

module.exports = UpFeedLike