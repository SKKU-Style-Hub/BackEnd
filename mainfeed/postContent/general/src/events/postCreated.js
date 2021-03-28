const producer = require('../kafkaClient/producer')


const PostCreated = (msg) => {
    producer('GeneralPostCreated', msg)
    console.log(msg)
}

module.exports = PostCreated