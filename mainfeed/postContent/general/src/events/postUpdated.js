const producer = require('../kafkaClient/producer')


const PostUpdated = (msg) => {
    producer('GeneralPostUpdated', msg)
    console.log(msg)
}

module.exports = PostUpdated