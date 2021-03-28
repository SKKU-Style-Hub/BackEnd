const producer = require('../kafkaClient/producer')


const StylingPostUpdated = (msg) => {
    producer('StylingPostUpdated', msg)
    console.log(msg)
}

module.exports = StylingPostUpdated