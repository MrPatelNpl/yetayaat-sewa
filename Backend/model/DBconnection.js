const mongoose = require('mongoose');
const db = "mongodb+srv://mrpatelnpl977:mDojgyh6QKRyvQNF@cluster0.lvjxym5.mongodb.net/yatayaat-sewa?retryWrites=true&w=majority";

mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>console.log("The database connected")).catch(err=>console.log(err));