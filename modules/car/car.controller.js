import db from "../../database/dbConn.js"
import { ObjectId } from 'mongodb'

export const addCar = async (req, res) => {
    const result = await db.collection('cars').insertOne(req.body);
    return res.json({ message: "Car Added Successfully!", result })
}
export const getAllCars = async (req, res) => {
    const result = await db.collection('cars').find().toArray();
    return res.json({ message: "Success!", result })
}

export const getCarById = async (req, res) => {
    const result = await db.collection('cars').findOne({ _id: new ObjectId(req.params.carId) });
    return res.json({ message: "Success!", result })
}
export const updateCarById = async (req, res) => {
    const result = await db.collection('cars').findOneAndUpdate({ _id: new ObjectId(req.params.carId) }, { $set: req.body });
    return res.json({ message: "Updated Successfully!", result })
}
export const deleteCarById = async (req, res) => {
    const result = await db.collection('cars').deleteOne({ _id: new ObjectId(req.params.carId) });
    return res.json({ message: "Deleted Successfully!", result })
}
