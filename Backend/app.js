const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
require('./model/DBconnection');


app.get("/",(req,res)=>{
    res.send("hello world");
})




app.listen(PORT,()=>{console.log(`The application is Running on localhost:${PORT}`)});