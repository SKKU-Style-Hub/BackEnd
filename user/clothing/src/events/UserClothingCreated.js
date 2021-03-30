const producer = require('../kafkaClient/producer')


const UserClothingCreated = (msg) => {
    producer('UserClothingCreated', msg)
    console.log(msg)
}

module.exports = UserClothingCreated