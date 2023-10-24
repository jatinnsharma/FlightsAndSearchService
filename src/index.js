const express = require('express')
const app = express();
require('dotenv').config()
const PORT = process.env;


app.get('/',(req,res)=>{
    res.send('helloworld')
})

app.listen(PORT,()=>{
    console.log(`Your server is running on PORT ${PORT}`)
})