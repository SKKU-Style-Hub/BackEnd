const producer = require('../kafkaClient/producer')


const StylingPostDeleted = (msg) => {
    producer('StylingPostDeleted', msg)
    console.log(msg)
}

module.exports = StylingPostDeleted