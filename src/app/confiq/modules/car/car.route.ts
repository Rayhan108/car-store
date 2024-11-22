import express from 'express'
import { CarController } from './car.controller';
const router = express.Router();
router.post('/create-car',CarController.createCar)

export const carRoute = router
