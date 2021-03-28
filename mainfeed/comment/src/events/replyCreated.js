const producer = require('../kafkaClient/producer')


const ReplyCreated = (msg) => {
    producer('ReplyCreated', msg)
    console.log(msg)
}

module.exports = ReplyCreated