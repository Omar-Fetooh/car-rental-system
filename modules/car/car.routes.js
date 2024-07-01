import { Router } from 'express'
import { addCar, deleteCarById, getAllCars, getCarById, updateCarById } from './car.controller.js';

const carRouter = Router();

carRouter.route('/')
    .get(getAllCars)
    .post(addCar)

carRouter.route('/:carId')
    .get(getCarById)
    .put(updateCarById)
    .delete(deleteCarById)


export default carRouter