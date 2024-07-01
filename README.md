
# Car Rental System (JUST FOR LEARNING :) )

## POSTMAN DOCUMENTATION : 
<a href='https://documenter.getpostman.com/view/30656515/2sA3dvjsNG'>Documentation</a>

a Car rental system where users can rent Cars. The system
should have the following functionalities:
Manage Car (CRUD operations)
Manage Customers (CRUD operations)
Manage Rentals (CRUD operations)
## MongoDB Models:
#### Car: Should have fields like name, model, and rental status(available/rented).
#### Customer: Should have fields like name, password, email, and phone number.
#### Rental: Should have references to both Car and Customer and include fields for rental date and return date.

## User APIs:
- Signup
- Sign in
- Get a specific user.
- Get all users.
- Update user (owner only)
- Delete user (owner only)

## Car APIs:
- Add car
- Get a specific car
- Get all cars
- Update a car.
- Delete a car.

## Rental APIs:
- Create Rental
- Update Rental
- Delete Rental
- Get all Rentals
- Get a specific Rental
## Special APIs:
- Get all cars whose model is ‘Honda’ and ‘Toyota’ (using query
params)
- Get Available Cars of a Specific Model.
- Get Cars that are Either rented or of a Specific Model.
- Get Available Cars of Specific Models or Rented Cars of a
Specific Model
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
