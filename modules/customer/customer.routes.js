import { Router } from 'express'
import { deleteUserById, getAllUsers, getUserById, signin, signup, updateUserById } from './customer.controller.js';

const userRouter = Router();

userRouter.route('/').get(getAllUsers)

userRouter.post('/signup', signup)

userRouter.post('/signin', signin)

userRouter.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

export default userRouter