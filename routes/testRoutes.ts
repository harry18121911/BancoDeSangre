import { testController } from "../controllers/testController"

const express = require ('express')

//router objet

const router = express.Router()

//routes

router.get('/', testController)

//export
module.exports = router;