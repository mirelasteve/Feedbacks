const passport =  require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook');
const keys = require('../config/config') ;
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user,done)=>{
    done(null,user.id)
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
});


passport.use(new GoogleStrategy({
    clientID:keys.googleClientId,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
 },(accessToken,refreshToken,profile,done)=>{
     User.findOne({googleId:profile.id})
        .then((existingUser)=>{
            if(existingUser){
                done(null,existingUser)
            } else {
     
                new User({
                    googleId:profile.id
                }).save()
                    .then(user=> done(null,user))
            }
        })



 }
))

passport.use(new LinkedInStrategy({
    clientID: keys.linkedinClientId,
    clientSecret: keys.linkedinClientSecret,
    callbackURL: '/auth/linkedin/callback'
  },(token, tokenSecret, profile, done)=> {
      console.log(profile.id);
    User.findOne({linkedinId: profile.id}).then((existingUser)=>{
        if(existingUser){
            done(null,existingUser)
        } else {
 
            new User({
                linkedinId:profile.id,
               
            }).save()
                .then(user=> done(null,user))
        }
    })
  }
));

passport.use(new GitHubStrategy({
    clientID: keys.githubClientId,
    clientSecret: keys.githubClientSecret,
    callbackURL:'/auth/github/callback'
  },
  (token, tokenSecret, profile, done)=> {
    
    User.findOne({ githubId: profile.id }).then((existingUser)=>{
        if(existingUser){
            done(null,existingUser)
        } else {
 
            new User({
                githubId:profile.id
            }).save()
                .then(user=> done(null,user))
        }
    })
  }
));
