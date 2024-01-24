import { testController } from "../controllers/testController"

import express from 'express'

//router objet

const router = express.Router()

//routes

router.get('/', testController)

//export
export default router;