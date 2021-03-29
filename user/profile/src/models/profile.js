const mongoose = require('mongoose')


// profile 항목 더 생각해보기
const profileSchema = new mongoose.Schema({
    userNickname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'seller', 'admin'],
        required: true
    },
}, { timestamps: true })

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile