const producer = require('../kafkaClient/producer')


const StylingResponseUpdated = (msg) => {
    producer('StylingResponseUpdated', msg)
    console.log(msg)
}

module.exports = StylingResponseUpdated