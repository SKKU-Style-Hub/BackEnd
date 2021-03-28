const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conClothingFromCloset' })

const conClothingFromCloset = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'clothing',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // User Cloth Created -> Create Cloth In Closet            
            if (type === 'UserClothingCreated') {
                await axios.post('http://nginx/api/closet/create/cloth', {
                    userProfile: value.userProfile,
                    clothing: value.clothing
                })
            }

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet




            console.log(value.userProfile)
        },
    })
}

module.exports = conClothingFromCloset