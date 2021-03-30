const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conUserClothingFromCloset' })

const conUserClothingFromCloset = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'userClothing',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // User Cloth Created -> Create Cloth In Closet            
            if (type === 'UserClothingCreated') {
                console.log('UserClothingCreated')
                await axios.post('http://nginx/api/closet/create/clothing', {
                    userProfile: value.userProfile,
                    clothing: value
                })
            }

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet




            console.log(value.userProfile)
        },
    })
}

module.exports = conUserClothingFromCloset