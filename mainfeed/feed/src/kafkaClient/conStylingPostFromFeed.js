const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conStylingPostFromFeed' })

const conStylingPostFromFeed = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'stylingPost',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Post Created -> Create Feed            
            if (type === 'StylingPostCreated') {
                await axios.post('http://nginx/api/mainfeed/create', {
                    contentType: 'styling',
                    userProfile: value.userProfile,
                    content: value
                })
            }

            // Styling Post Updated -> Update Feed
            if (type === 'StylingPostUpdated') {

            }

            // Styling Response Updated -> Update Feed
            if (type === 'StylingResponseUpdated') {
                await axios.post('http://nginx/api/mainfeed/update/response', {
                    stylingPostId: value._id,
                    stylingResponse: value
                })
            }

            console.log(value.userProfile)
        },
    })
}

module.exports = conStylingPostFromFeed