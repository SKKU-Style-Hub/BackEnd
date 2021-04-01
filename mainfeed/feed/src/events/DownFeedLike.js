const producer = require('../kafkaClient/producer')

const DownFeedLike = (msg) => {
    producer('DownFeedLike', msg)
    console.log(msg)
}

module.exports = DownFeedLike