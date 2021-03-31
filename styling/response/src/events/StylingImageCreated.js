const producer = require('../kafkaClient/producer')


const StylingImageCreated = (msg) => {
    producer('StylingImageCreated', msg)
    console.log(msg)
}

module.exports = StylingImageCreated