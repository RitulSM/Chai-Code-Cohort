import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconnect from "./utils/db.js";
import userrouter from "./routes/user.routes.js";



dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

dbconnect();
app.use("/api/v1/users", userrouter);
const port=process.env.PORT || 4000;
app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`);   

});