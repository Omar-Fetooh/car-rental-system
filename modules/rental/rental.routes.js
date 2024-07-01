import { Router } from 'express'
import { addRental, deleteRentalById, getAllRentals, getRentalById, updateRentalById } from './rental.controller.js';


const rentalRouter = Router()

rentalRouter.route('/')
    .get(getAllRentals)
    .post(addRental)

rentalRouter.route("/:rentalId")
    .get(getRentalById)
    .put(updateRentalById)
    .delete(deleteRentalById)

export default rentalRouter;