const producer = require('../kafkaClient/producer')


const PostDeleted = (msg) => {
    producer('GeneralPostDeleted', msg)
    console.log(msg)
}

module.exports = PostDeleted