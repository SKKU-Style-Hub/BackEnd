const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

// Import Route
const SignUp = require('./routes/signUp')
const SignIn = require('./routes/signIn')
const SignOut = require('./routes/signOut')
const getCurrentUser = require('./routes/currentUser')

// Connect to MongoDB -> docker-compose.yml 의 links 정보로 주소명에 서비스명 사용 가능
mongoose.connect("mongodb://userdb/user", { useNewUrlParser: true, useUnifiedTopology: true });
// 연결확인 -> Event Listner
mongoose.connection
    .once('open', () => console.log('UserDB Connected'))
    .on('error', (err) => {
        console.log("Your error is ", err)
    })



// Request Body 에서 json 받기 위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(SignIn)
app.use(SignOut)
app.use(getCurrentUser)
app.use(SignUp)

// Route 미들웨어


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})



