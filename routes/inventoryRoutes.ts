import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createInventoryController } from "../controllers/inventoryController";
const router = express.Router()

//routes
//add inventory || post

router.post('/create-inventory',authMiddleware, createInventoryController);

export default router;