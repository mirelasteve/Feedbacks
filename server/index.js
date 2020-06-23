const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({ success: 'Excellent 6'});
});

const PORT = process.env.PORT || 5000
app.listen(PORT);