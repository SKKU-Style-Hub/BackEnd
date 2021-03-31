const express = require('express')
const app = express()
const mongoose = require('mongoose')

const CreateSellerClothing = require('./routes/createSellerClothing')
const DeleteSellerClothing = require('./routes/deleteSellerClothing')
const UpdateSellerClothing = require('./routes/updateSellerClothing')
const ReadSellerClothing = require('./routes/readSellerClothing')

const port = 8080;

app.use(express.json({
    limit: "10mb"
}))
app.use(express.urlencoded({ extended: false }))

app.use(CreateSellerClothing)
app.use(DeleteSellerClothing)
app.use(UpdateSellerClothing)
app.use(ReadSellerClothing)

mongoose.connect("mongodb://marketdb/cloth", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('Market DB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })


// 플랫폼 내에 등록되는 모든 옷을 관리 ( 판매자 등록, 소비자 등록 )

app.listen(port, () => {
    console.log('Market Service is Running')
})

