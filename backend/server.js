const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const app = express();

dotenv.config()
app.use(express.json())

const PORT  = process.env.PORT || 5300;

const URI = 'mongodb+srv://testing:testing123@cluster0.mfa0a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.get("/",(req,res)=>{
    res.json({msg:"This is Example"})
})

app.listen(PORT,()=>{
    console.log("Server is Running ...")
})

// router 

app.use('/user',require('./routes/useRouter'))

// connect to mongodb 

mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(error=>{
    console.log(error)
})