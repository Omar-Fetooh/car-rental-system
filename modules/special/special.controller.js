import db from '../../database/dbConn.js'
import { ObjectId } from 'mongodb'

export const getHondaORToyota = async (req, res) => {
    const result = await db.collection('cars').find({ $or: [{ model: 'Honda' }, { model: 'Toyota' }] }).toArray()
    return res.json({ message: "success", result })
}

export const getAvaSpecModel = async (req, res) => {
    const { model } = req.query;
    const result = await db.collection('cars').find({ $and: [{ model: model }, { rental_status: 0 }] }).toArray()
    return res.json({ message: "success", result })
}

export const getRenANDSpecModel = async (req, res) => {
    const { model } = req.query;
    const result = await db.collection('cars').find({ $or: [{ model: model }, { rental_status: 1 }] }).toArray()
    return res.json({ message: "success", result })
}

// export const getSpecModel = async (req, res) => {
//     const { model } = req.query;
//     const result = await db.collection('cars').find({ $and: [{ model: model }, { rental_status: 0 }] }).toArray()
//     return res.json({ message: "success", result })
// }
export const AvaModelsORRentedOfModel = async (req, res) => {
    const { smodel1, smodel2, smodel3, model } = req.query;

    let availableModelsArray = [smodel1, smodel2, smodel3];

    console.log(availableModelsArray)
    const result = await db.collection('cars').find({
        $or:
            [
                {
                    rental_status: 0,
                    model: { $in: availableModelsArray }
                },
                {
                    rental_status: 1,
                    model: model
                }
            ]
    }).toArray()
    return res.json({ message: "success", result })
}

