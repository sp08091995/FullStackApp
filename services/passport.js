const { Mongoose } = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleClientCredentials = require('../config/keys');
const mongoose = require ('mongoose')
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id, done)=>{
    try{
        let userExist = await User.findById(id)
        done (null,userExist)
    }catch(err){
        done (err,null)
    }
})

passport.use(new GoogleStrategy({
    clientID: googleClientCredentials.googleClientID,
    clientSecret: googleClientCredentials.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refReshToken, profile, done) => {
    try{
        let existingUser = await User.findOne({googleId: profile.id})
        if(!existingUser.exists){
            let user = await new User({googleId: profile.id}).save();
            done(null, user)
        } else {
            done(null, existingUser)
        }
        
    }catch(err){
        console.log(err)
        done(err,null)
    } 
    
}));
