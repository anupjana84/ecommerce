const router = require('express').Router();
const {createNewUser,getUsers,fileuploaded} =require('../controllers/users');
const User = require('../models/User');
const { body } = require('express-validator');
const {loginController, registerController} =require('../controllers/auth')
router.post('/login',loginController)
router.post('/register',registerController)
module.exports=router