const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

const userCtrl = {
    register: async (req,res)=>{
        try{
            const {name,email,password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg:"Email Already Registerd"});
            if(password.length < 6) return res.status(400).json({msg:"password is al least 6 Character"});

            const passwordHash = await bcrypt.hash(password,10)

            const newUser = new Users({
                name , email ,password:passwordHash
            })

            // save mongoDb
            await newUser.save()

            //  create awt to authentiaction 

            res.json({msg:"Register Sucessfull !"})

        }
        catch(error){
            return res.status(500).json({msg:error.message})
        }
    }
}

module.exports = userCtrl