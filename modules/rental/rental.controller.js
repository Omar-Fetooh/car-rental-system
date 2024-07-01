import db from "../../database/dbConn.js";
import { ObjectId } from "mongodb"

export const addRental = async (req, res) => {
    const { car_id, customer_id, rental_date, return_date } = req.body;

    const carObjectId = new ObjectId(car_id);
    const customerObjectId = new ObjectId(customer_id)

    const car = await db.collection("cars").findOne({ _id: carObjectId });
    if (car.rental_status === 1) {
        return res.json({ message: "Sorry , car is already Rented" })
    }

    const result = await db.collection("rentals").insertOne({ carObjectId, customerObjectId, rental_date, return_date });
    // to update the status of the car  
    await db.collection('cars').updateOne({ _id: carObjectId }, { $set: { rental_status: 1 } })
    res.json({ message: "Rental Added Successfully!", result })
}

export const getAllRentals = async (req, res) => {
    const result = await db.collection("rentals").find().toArray();
    res.json({ message: "Success!", result })
}

export const getRentalById = async (req, res) => {
    const result = await db.collection("rentals").findOne({ _id: new ObjectId(req.params.rentalId) });
    // const result2 = await db.collection("rentals").aggregate([
    //     {
    //         $lookup: {
    //             from: 'customers',
    //             localField: 'customer_id',
    //             foreignField: "_id",
    //             as: "Customer"
    //         }

    //     }
    // ]).toArray()
    res.json({ message: "Success!", result })
}

export const updateRentalById = async (req, res) => {
    const result = await db.collection("rentals").findOneAndUpdate({ _id: new ObjectId(req.params.rentalId) }, { $set: req.body });
    res.json({ message: "Updated Successfully!", result })
}

export const deleteRentalById = async (req, res) => {
    const result = await db.collection("rentals").deleteOne({ _id: new ObjectId(req.params.rentalId) });
    res.json({ message: "Deleted Successfully!", result })
}
