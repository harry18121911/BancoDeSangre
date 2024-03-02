import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { deleteDonorController,  getDonorsListController, getHospitalsListController, getOrganizationsListController } from "../controllers/adminController";
import { adminMiddleware } from "../middlewares/adminMiddleware";
const router = express.Router()

//routes

router.get('/donor-list', authMiddleware,adminMiddleware, getDonorsListController);

router.get('/hospital-list', authMiddleware,adminMiddleware, getHospitalsListController);

router.get('/organization-list', authMiddleware,adminMiddleware, getOrganizationsListController);

router.delete('/delete-donor/:id', authMiddleware,adminMiddleware, deleteDonorController);


export default router;
