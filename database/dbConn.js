import { MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017');


client
    .connect()
    .then(() => console.log('Database is connected...'))
    .catch((err) => console.log(err))



const db = client.db('car_rental_sys');
export default db;