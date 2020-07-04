const express = require('express');
const mongoose = require('mongoose');
const passport =  require('passport');
const authRoutes = require('./routes/authRoutes/authRoutes');
const billingRoutes = require('./routes/billingRoutes/billingRoutes');
const bodyParser = require('body-parser');
const keys = require('./config/config');
const cookieSession= require('cookie-session');
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI)
const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys:[keys.cookieKey]

}))

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
billingRoutes(app);

if(process.env.NODE_END === 'production'){
    app.use(express.static('feedbackmessages/build'));
    
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'feedbackmessages','build','index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT);