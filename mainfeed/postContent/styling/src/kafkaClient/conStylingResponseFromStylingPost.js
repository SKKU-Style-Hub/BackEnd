const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conStylingResponseFromStylingPost' })

const conStylingResponseFromStylingPost = async () => {
    console.log('conStylingResponseFromStylingPost is Running')
    await consumer.connect()
    await consumer.subscribe({
        topic: 'stylingResponse',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Requset Created -> Create Styling Post
            if (type === 'StylingResponseCreated') {
                await axios.post('http://nginx/api/post/styling/update/response', {
                    stylingPostId: value.stylingPostId,
                    stylingResponse: value
                })
            }

            // Styling Request Deleted -> Delete Styling Post

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet
        },
    })
}

module.exports = conStylingResponseFromStylingPost