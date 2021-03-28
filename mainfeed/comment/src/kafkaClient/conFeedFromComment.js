const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conFeedFromComment' })

const conPostFromFeed = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'feed',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Feed Deleted -> Create Feed            
            if (type === 'GeneralFeedDeleted' || type === 'StylingFeedDeleted') {
                await axios.post('http://nginx/api/comment/delete/feed', {
                    feedId: value.feedId
                })
            }
            console.log(value.userProfile)
        },
    })
}

module.exports = conPostFromFeed