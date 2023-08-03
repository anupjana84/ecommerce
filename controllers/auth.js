const User = require('../models/User');
const userService = require('../service/user');
const authService = require('../service/auth');
 const {error} = require('../error');
 const { query, matchedData, validationResult } = require('express-validator');
const path =require('path');
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken');

//
async function authenticate(req, res, next) {
	try {
		let token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({ message: 'Unauthorized' });
		}
		token = token.split(' ')[1];
		const decoded = jwt.verify(token, 'secret-key');
		const user = await User.findById(decoded._id);

		if (!user) {
			return res.status(401).json({ message: 'Unauthorized' });
		}

		req.user = user;
		next();
	} catch (e) {
		return res.status(400).json({ message: 'Invalid Token' });
	}
}


//register user
const registerController = async (req, res, next)=>{
    const {name, email, password}=req.body
    try {
        
    } catch (e) {
        next(e)
    }
}
// login user
const loginController=async(req, res, next)=>{
const {email, password}=req.body

    try {
        const user = await User.findOne({email:email})
        if (!user) {
          return  res.status(400).json({error:'Invalid Credential'})
            
        }
        const isMatch = await  bcrypt.compare(password,user.password)
        if (!isMatch) {
            res.status(400).json({error:"Invalid Credential"})
            
        }
        console.log(user)
        delete user._doc.password;
        // user.password =undefined
        const token = jwt.sign(user._doc, 'secret-key', { expiresIn: '2h' });
        // console.log(user,'ue')
        console.log(token)
        return res.status(200).json({ message: 'Login Successful', token });
        
         
        // const token 
        
        
    } catch (e) {
        next(e)
    }
}
module.exports ={
    registerController,
    loginController,
    authenticate
}