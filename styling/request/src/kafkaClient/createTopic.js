const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const admin = kafka.admin()

const postTopic = async function (topicTitle) {
    await admin.connect()
    await admin.createTopics({
        topics: [{
            topic: topicTitle,
        }]
    })
    await admin.disconnect()
}

module.exports = postTopic
