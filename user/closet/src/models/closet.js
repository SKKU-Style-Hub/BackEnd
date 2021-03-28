const mongoose = require('mongoose')

// 옷장에서는 옷 정보만 넘어주면 
const closetSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true
    },
    // Cloth 데이터 객체 , ClothImage 는 url로 전달 ( 이미지 따로 저장 필요 )
    clothingArray: {
        type: Array,
        required: true
    }
}, { timestamps: true })

const Closet = mongoose.model('Closet', closetSchema)
module.exports = Closet
