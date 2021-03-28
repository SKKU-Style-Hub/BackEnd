const producer = require('../kafkaClient/producer')


const replyDeleted = (msg) => {
    producer('replyDeleted', msg)
    console.log(msg)
}

module.exports = replyDeleted