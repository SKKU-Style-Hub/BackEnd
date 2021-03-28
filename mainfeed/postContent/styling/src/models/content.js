const mongoose = require('mongoose');

const stylingSchema = new mongoose.Schema({
    userProfile: {
        type: Object,
        required: true,
    },
    stylingRequest: {
        type: Object,
        requireed: true
    },
    stylingResult: {
        type: Array,    //Styling Response 객체
    },
}, { timestamps: true })

const StylingPost = mongoose.model('Post', stylingSchema)
module.exports = StylingPost;

// "stylingContent" : {
//     "requestId" : Integer,
//     "requestorId" : Integer,
//     "requestorNickname" : String, //Base64
//     "requestorImg" : String, //Base64
//     "requestClothingImg" : String, //Base64
//     "requestContent" : String,
//     "stylingResult" : [
//         {
//             "stylingId" : Integer,
//             "stylistId" : Integer,
//             "stylistNickname" : String,
//             "stylistImg" : String, //Base64
//             "stylingImg" : String, //Base64
//             "components" : [
//                 {
//                     "brandName" : String,
//                     "price" : Integer,
//                     "productLink" : String,
//                     "xCoordinate" : Float,
//                     "yCoordinate" : Float
//                 }
//             ]
//         }
//     ]
// },