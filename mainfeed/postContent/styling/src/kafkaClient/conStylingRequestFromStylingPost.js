const { Kafka } = require('kafkajs')
const axios = require('axios')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const consumer = kafka.consumer({ groupId: 'conStylingRequestFromStylingPost' })

const conStylingRequestFromStylingPost = async () => {
    await consumer.connect()
    await consumer.subscribe({
        topic: 'stylingRequest',
        fromBeginning: true
    })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            const value = JSON.parse(message.value.toString())
            const type = message.headers.type.toString()

            // Styling Requset Created -> Create Styling Post
            if (type === 'StylingRequestCreated') {
                await axios.post('http://nginx/api/post/styling/create', {
                    userProfile: value.userProfile,
                    stylingRequest: value
                })
            }

            // Styling Request Deleted -> Delete Styling Post

            // User CLoth Deleted -> Delete Cloth In Closet            


            // User CLoth Updated -> Update Cloth In Closet




            console.log(value.userProfile)
        },
    })
}

module.exports = conStylingRequestFromStylingPost