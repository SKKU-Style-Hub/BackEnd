const producer = require('../kafkaClient/producer')


const StylingRequestCreated = (msg) => {
    producer('StylingRequestCreated', msg)
    console.log(msg)
}

module.exports = StylingRequestCreated