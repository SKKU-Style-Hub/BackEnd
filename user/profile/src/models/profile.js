const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

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
    profileId: {
        type: Number,
        default: 1,
        index: true
    }
}, { timestamps: true })

profileSchema.plugin(AutoIncrement, { inc_field: 'profileId' })

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile