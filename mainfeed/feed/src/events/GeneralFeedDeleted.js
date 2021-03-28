const producer = require('../kafkaClient/producer')

const GeneralFeedDeleted = (msg) => {
    producer('GeneralFeedDeleted', msg)
    console.log(msg)
}

module.exports = GeneralFeedDeleted