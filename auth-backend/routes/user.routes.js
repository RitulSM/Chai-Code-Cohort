import express from "express";

import { registerUser,verifyuser,login } from "../controllers/user.controller.js";
const router=express.Router();

router.post("/register",registerUser);
router.post("/verify/:token",verifyuser);
router.post("/login",login);

export default router;