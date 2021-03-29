const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conFeedFromStylingResponse' })

const conFeedFromStylingResponse = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'feed',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Post Deleted -> Delete Styling
            if (type === 'StylingPostDeleted') {
                await axios.post('http://nginx/api/styling/response/delete', {
                    feedId: value.feedId
                })
            }

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet




            console.log(value.userProfile)
        },
    })
}

module.exports = conFeedFromStylingResponse