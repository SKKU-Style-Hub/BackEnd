const producer = require('../kafkaClient/producer')


const CommentCreated = (msg) => {
    producer('CommentCreated', msg)
    console.log(msg)
}

module.exports = CommentCreated