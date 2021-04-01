const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userNickname: {
        type: String,
        required: true,
        index: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    socialLogin: {
        type: String,
        index: true
    },
    gender: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    // birthday: {
    //     type: String,
    //     required: true
    // },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'seller', 'admin'],
        required: true
    }
}, { timestamps: true });


//  의류 데이터베이스 객체 -> 핸들러
//  collection은 자동으로 anootations 로 변환 (mongodb에서 collection은 복수형이 defualt)
const User = mongoose.model('User', userSchema);
module.exports = User;