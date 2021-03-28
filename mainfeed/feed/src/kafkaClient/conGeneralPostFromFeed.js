const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conGeneralPostFromFeed' })

const conPostFromFeed = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'generalPost',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Post Created -> Create Feed            
            if (type === 'GeneralPostCreated') {
                await axios.post('http://nginx/api/mainfeed/create', {
                    contentType: 'general',
                    userProfile: value.userProfile,
                    content: value
                })
            }

            // Post Updated -> Update Feed
            if (type === 'GeneralPostUpdated') {

            }

            // Post Deleted -> Delete Feed


            // Comment Created -> Create Feed


            // Comment Updated -> Update Feed


            // Commet Deleted -> Delete Feed

            console.log(value.userProfile)
        },
    })
}

module.exports = conPostFromFeed