import User from "../models/User.model.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const registerUser=async(req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    if(!username || !email || !password){
       return res.status(400).json({message:"All fields are required"});
    }  
    try{
       const existinguser=await User.findOne({email:email});
       if(existinguser){
           return res.status(400).json({message:"User already exists"});
       }
       const user= await User.create({username,email,password}); 

       const token = crypto.randomBytes(32).toString("hex");
       console.log(token);
       user.verificationToken = token;
       await user.save();
       return res.status(201).json({message:"User registered successfully"});


    }
    catch(err){
       console.log(err);
       return res.status(500).json({message:"Something went wrong"});
    }
    
}

const verifyuser=async(req,res)=>{
    const { token } = req.params;
    console.log(token);
    if (!token) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    const user = await User.findOne({ verificationToken: token });
  
    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({
      message: "User verified successfully",
    });
}
const login=async(req,res)=>{   
     const {email,password}=req.body;
     if(!email || !password){   
        return res.status(400).json({message:"All fields are required"});
     }
     try{
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(400).json({message:"User does not exist"});
        }
        if(!user.isVerified){
            return res.status(400).json({message:"User is not verified"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"});
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        return res.status(200).json({message:"User logged in successfully",token:token});
     }
     catch(err){
        console.log(err);
        return res.status(500).json({message:"Something went wrong"});
     }
}


export {registerUser,verifyuser,login};