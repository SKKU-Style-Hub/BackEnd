const producer = require('../kafkaClient/producer')


const CommentUpdated = (msg) => {
    producer('CommentUpdated', msg)
    console.log(msg)
}

module.exports = CommentUpdated