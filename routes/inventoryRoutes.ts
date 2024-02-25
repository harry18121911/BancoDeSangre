import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createInventoryController, getInventoryController, getDonorsController, getHospitalsController, getOrganizationController, getOrganizationControllerForHospital, getInventoryHospitalController } from "../controllers/inventoryController";
const router = express.Router()

//routes
//add inventory || post

router.post('/create-inventory',authMiddleware, createInventoryController);

//get all blood records

router.get('/get-inventory',authMiddleware, getInventoryController);

router.post('/get-inventory-hospital',authMiddleware, getInventoryHospitalController);

router.get('/get-donors',authMiddleware, getDonorsController );

router.get('/get-hospitals',authMiddleware, getHospitalsController );

router.get('/get-organizations',authMiddleware, getOrganizationController);

router.get('/get-organizations-for-hospital',authMiddleware, getOrganizationControllerForHospital);

export default router;
