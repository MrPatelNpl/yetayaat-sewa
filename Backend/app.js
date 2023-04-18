const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./models');


app.get("/",(req,res)=>{
    res.send("hello world");
})



db.sequelize.sync().then((req)=>{
app.listen(PORT,()=>{console.log(`The application is Running on localhost:${PORT}`)})
})