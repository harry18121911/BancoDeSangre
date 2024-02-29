import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { getDonorsController } from "../controllers/inventoryController";
import { bloodGroupDetailsController } from "../controllers/analyticsController";
const router = express.Router()

//routes

router.get('/bloodGroup-data',authMiddleware, bloodGroupDetailsController);

export default router;
