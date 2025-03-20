import mongoose  from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbconnect=()=>{
    try{
       
         mongoose.connect(process.env.DB_URL);
        console.log("Database connected");
    }
    catch(error){
        console.log(error);
    }
}
export default dbconnect;