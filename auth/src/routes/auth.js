const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const User = require('../models/user')
require('dotenv').config()



const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// Authorization
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_KEY,
}), (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err) {
            return done(err, false)
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
})


// Authentication
passport.use(new LocalStrategy((userNickName, password, done) => {
    User.findOne({ userNickName }, (err, user) => {
        // Something went wrong with database
        if (err) {
            return done(err);
        }
        // No user exist
        if (!user) {
            return done(null, false);
        }
        // check if password is correct
        User.comparePassword(password, done);
    })
}))

module.exports = passport;