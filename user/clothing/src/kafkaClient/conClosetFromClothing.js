const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conClosetFromClothing' })

const conClosetFromClothing = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'closet',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Cloth Deleted From Closet -> Delete Clothing
            if (type === 'ClosetClothingDeleted') {
                await axios.post('http://nginx/api/clothing/delete', {
                    clotingId: value.clothingId
                })
            }

            // Cloth Deleted From Closet -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet
        },
    })
}

module.exports = conClosetFromClothing