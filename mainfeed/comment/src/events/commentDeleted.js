const producer = require('../kafkaClient/producer')


const CommentDeleted = (msg) => {
    producer('CommentDeleted', msg)
    console.log(msg)
}

module.exports = CommentDeleted