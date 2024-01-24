import express from "express";
import { loginController, registerController } from "../controllers/authController";

const router = express.Router()

//routes

//Register || post
router.post('/register', registerController)

//Login || post

router.post('/login', loginController)

export default router;