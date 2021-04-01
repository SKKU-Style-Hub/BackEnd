const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conStylingResponseFromStylingRequest' })

const conStylingPostFromStylingRequest = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'stylingResponse',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Feed Deleted -> Delete Styling
            if (type === 'StylingPostDeleted') {
                await axios.post('http://nginx/api/styling/delete', {
                    feedId: value.feedId
                })
            }

            if (type === 'StylingResponseCreated') {
                await axios.post('http://nginx/api/styling/create/count', {
                    updatedStylingPost: value
                })
            }


            console.log(value.userProfile)
        },
    })
}

module.exports = conStylingPostFromStylingRequest