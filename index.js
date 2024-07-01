import express from 'express'
import userRouter from './modules/customer/customer.routes.js';
import carRouter from './modules/car/car.routes.js';
import rentalRouter from './modules/rental/rental.routes.js';
import specialRouter from './modules/special/special.routes.js';

const app = express()
const port = 3000

app.use(express.json());

app.use("/users", userRouter)
app.use("/cars", carRouter)
app.use("/rentals", rentalRouter)
app.use("/specials", specialRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))