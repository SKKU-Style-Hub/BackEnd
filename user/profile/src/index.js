const express = require('express')
const app = express()
const mongoose = require('mongoose')
const CreateProfile = require('./routes/createProfile')
const UpdateProfile = require('./routes/updateProfile')

const port = 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(CreateProfile)
app.use(UpdateProfile)


mongoose.connect("mongodb://profiledb/profile", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('Market DB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })


app.listen(port, () => {
    console.log('Market Service is Running')
})

