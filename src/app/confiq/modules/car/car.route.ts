import express from 'express'
import { CarController } from './car.controller';
const router = express.Router();
router.post('/create-car',CarController.createCar)
router.get('/',CarController.getAllCar)
router.get('/:carId',CarController.getSingleCar)
export const carRoute = router
