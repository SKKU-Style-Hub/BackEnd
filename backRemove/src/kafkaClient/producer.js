const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'stylehub',
    brokers: ['broker:9092']
})

const producer = kafka.producer()

const produce = async function (name, msg) {
    await producer.connect()
    await producer.send({
        topic: 'imageProcess',
        messages: [{
            value: JSON.stringify(msg),
            headers: {
                type: name
            }
        }]
    })
    await producer.disconnect()
}

module.exports = produce