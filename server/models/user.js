const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId:String,
    linkedinId:String,
    githubId:String,
    facebookId:String
})

mongoose.model('users',userSchema)