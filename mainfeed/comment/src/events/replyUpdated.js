const producer = require('../kafkaClient/producer')


const replyUpdated = (msg) => {
    producer('replyUpdated', msg)
    console.log(msg)
}

module.exports = replyUpdated