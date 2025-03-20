import { PrismaClient } from "@prisma/client";

import bcrypt from "bcryptjs";

const prisma=new PrismaClient();

export const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email||!password){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser=await prisma.user.findUnique({
        where:{email:email}

    })
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    try{
        const hashedpassword=await bcrypt.hash(password,10);
        const user=await prisma.user.create({
            data:{name,email,password:hashedpassword}
        });
        res.status(200).json(user);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});    
    }
}