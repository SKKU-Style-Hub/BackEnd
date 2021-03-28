const producer = require('../kafkaClient/producer')


const StylingResponseDeleted = (msg) => {
    producer('StylingResponseDeleted', msg)
    console.log(msg)
}

module.exports = StylingResponseDeleted