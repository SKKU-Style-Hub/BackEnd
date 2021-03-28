const producer = require('../kafkaClient/producer')


const StylingPostCreated = (msg) => {
    producer('StylingPostCreated', msg)
    console.log(msg)
}

module.exports = StylingPostCreated