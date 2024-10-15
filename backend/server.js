const express = require("express");
const mongoose = require("mongoose")
const mongodb = require("mongodb")
const dotenv = require("dotenv")
const bcrypt = require('bcrypt')
const router = require('./routes/useRouter')
const cookieParser = require("cookie-parser")




const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser())
// app.use(bcrypt())

const PORT = process.env.PORT || 5300;

app.get('/',(req,res)=>{
    res.json({msg:"this is example"})
})


app.listen(PORT,()=>{
    console.log('Server is runnig ')
})

// Router 

app.use('/user',require('./routes/useRouter'))

// connect to mongodb 

const URI = process.env.MONGODB_URL;

mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(error =>{
    console.log(error)
})