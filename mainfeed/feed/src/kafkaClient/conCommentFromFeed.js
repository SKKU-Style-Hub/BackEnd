const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conCommentFromFeed' })

const conPostFromFeed = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'comment',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Comment Created -> Create Feed            
            if (type === 'CommentCreated') {
                await axios.post('http://nginx/api/mainfeed/create/comment', {
                    feedId: value.feedId,
                    newComment: value
                })
            }

            // Comment Updated -> Update Feed
            if (type === 'CommentUpdated') {
                await axios.post('http://nginx/api/mainfeed/update/comment', {
                    feedId: value.feedId,
                    newComment: value
                })

            }

            // Commet Deleted -> Delete Feed

            console.log(value.userProfile)
        },
    })
}

module.exports = conPostFromFeed