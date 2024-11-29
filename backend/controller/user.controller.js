import { User } from "../models/user.model.js";

export const register= async (req, res)=>{
    const {email,name,password,phone,education,role}= req.body;

    if(!email||!name||!password||!phone||!education||!role)
    {
        return res.status(400).json({message: "Please fill the required field(s)"});
    }
//Saving data to mongo database
    const user= await User.findOne({email});
    if(user){
        return res.status(400).json({message: "User already exists"});
    }

    const newUser = new User({email, name, password, phone, education, role});

   await newUser.save();

   if(newUser){
    res.status(201).json({message: "User registered successfully"});
   }
};