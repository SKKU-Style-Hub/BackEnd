const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    stylingPostId: {
        type: String,
        required: true
    },
    requestorProfile: {
        type: Object,
        required: true
    },
    // userProfile 객체 ( 토큰에 저장된 정보 )
    stylistProfile: {
        type: Object,
        required: true
    },
    // Cloth Data Obejct Array
    // 디바이스에서 X,Y cordinate 추가해서 보내면 됨
    components: {
        type: Array,
        required: true
    },
}, { timestamps: true })

const Response = mongoose.model('Response', responseSchema)
module.exports = Response
