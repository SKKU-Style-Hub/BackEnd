const producer = require('../kafkaClient/producer')


const UserClothingUpdated = (msg) => {
    producer('UserClothingUpdated', msg)
    console.log(msg)
}

module.exports = UserClothingUpdated