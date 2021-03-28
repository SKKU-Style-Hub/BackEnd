const producer = require('../kafkaClient/producer')


const ClosetClothingDeleted = (msg) => {
    producer('ClosetClothingDeleted', msg)
    console.log(msg)
}

module.exports = ClosetClothingDeleted