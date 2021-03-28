const express = require('express')
const app = express()
const mongoose = require('mongoose')

const SellerCreateCloth = require('./routes/sellerCreateCloth')
const UserCreateCloth = require('./routes/userCreateCloth')

const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(SellerCreateCloth)
app.use(UserCreateCloth)

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

