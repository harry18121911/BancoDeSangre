import express from "express";
import { currentUserController, loginController, registerController } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router()

//routes

//Register || post
router.post('/register', registerController)

//Login || post

router.post('/login', loginController)

//get current user || get
router.get('/current-user', authMiddleware, currentUserController)

export default router;