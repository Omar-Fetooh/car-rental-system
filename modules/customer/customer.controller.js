import db from "../../database/dbConn.js"
import { ObjectId } from "mongodb"

export const signup = async (req, res) => {
    const { name, password, email, phone } = req.body;
    const user = await db.collection('customers').findOne({ email: email })
    if (user) {
        return res.json({ message: "sorry,Email already Exists" });
    }
    const result = await db.collection('customers').insertOne({ name, password, email, phone, login_status: 0 })
    res.status(201).json({ message: "Success", result })
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('customers').findOne({ email: email })
    if (!user) {
        return res.json({ message: "sorry, but email doesn't exist" })
    }
    if (password !== user.password) {
        return res.json({ message: "Password is not correct !!" })
    }
    // Update rental status for cars with return_date <= current date
    const currentDate = new Date();
    const updateResult = await db.collection('cars').updateMany(
        { return_date: { $lte: currentDate }, rental_status: 1 },
        { $set: { rental_status: 0 } }
    );
    console.log(`${updateResult.modifiedCount} cars' rental status updated.`);

    const result = await db.collection('customers').updateOne({ email: email }, { $set: { login_status: 1 } })
    return res.json({ message: "User Logged in Successfully!", result })
}
export const getAllUsers = async (req, res) => {
    const result = await db.collection('customers').find().toArray();
    res.json({ message: "success", result })
}
export const getUserById = async (req, res) => {
    const result = await db.collection('customers').findOne({ _id: new ObjectId(req.params.userId) });
    res.json({ message: "success", result })
}
export const updateUserById = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('customers').findOne({ email: email });
    if (user.login_status === 0) {
        return res.json("Sorry , you are not signed in , only owner can do that ")
    }
    const result = await db.collection('customers').findOneAndUpdate({ _id: new ObjectId(req.params.userId) }, { $set: req.body });
    res.json({ message: "success", result })
}

export const deleteUserById = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.collection('customers').findOne({ email: email });
    if (user.login_status === 0) {
        return res.json("Sorry , you are not signed in , only owner can do that ")
    }
    const result = await db.collection('customers').findOneAndDelete({ _id: new ObjectId(req.params.userId) });
    res.json({ message: "Deleted successfully", result })
}