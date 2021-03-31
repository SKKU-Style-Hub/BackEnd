const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conStylingResponseFromImageProcess' })

const conStylingResponseFromImageProcess = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'stylingResponse',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Post Deleted -> Delete Styling
            if (type === 'StylingImageCreated') {
                await axios.post('http://nginx/api/image/process/styling/decode', {
                    beforeImage: value
                })
            }

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet




            console.log(value.userProfile)
        },
    })
}

module.exports = conStylingResponseFromImageProcess