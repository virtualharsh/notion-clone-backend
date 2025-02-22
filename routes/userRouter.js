const express = require('express')
const { addUser, checkUser } = require('../controllers/user.controller')
const {checkAuth} = require('../middlewares/authMiddleware')
const userRouter = express.Router()

userRouter.post('/register', addUser);

userRouter.post('/login', checkAuth, checkUser);

module.exports = userRouter