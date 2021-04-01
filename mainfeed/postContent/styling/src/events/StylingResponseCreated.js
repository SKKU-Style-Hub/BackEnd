const producer = require('../kafkaClient/producer')


const StylingResponseCreated = (msg) => {
    producer('StylingResponseCreated', msg)
    console.log(msg)
}

module.exports = StylingResponseCreated