import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createInventoryController, getInventoryController, getDonorsController, getHospitalsController } from "../controllers/inventoryController";
const router = express.Router()

//routes
//add inventory || post

router.post('/create-inventory',authMiddleware, createInventoryController);

//get all blood records

router.get('/get-inventory',authMiddleware, getInventoryController);

router.get('/get-donors',authMiddleware, getDonorsController );

router.get('/get-hospitals',authMiddleware, getHospitalsController );

export default router;
