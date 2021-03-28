const producer = require('../kafkaClient/producer')

const StylingFeedDeleted = (msg) => {
    producer('StylingFeedDeleted', msg)
    console.log(msg)
}

module.exports = StylingFeedDeleted