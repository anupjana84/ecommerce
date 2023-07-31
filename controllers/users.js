const User = require('../models/User');
const userService = require('../service/user');
const authService = require('../service/auth');
 const {error} = require('../error');
 const { query, matchedData, validationResult } = require('express-validator');
const path =require('path');



const getUsers = async (req, res, next) => {
	/**
	 * TODO: filter, sort, pagination, select
	 */

	try {
		let users = await User.find({}).select("-password");
		
		
		return res.status(200).json(users);
	} catch (e) {
		next(e);
	}
};

const getUserById = async (req, res, next) => {
	// const { userId } = req.params;

	// try {
	// 	const user = await userService.findUserByProperty('_id', userId);

	// 	if (!user) {
	// 		throw error('User not found', 404);
	// 	}
	// 	// TODO: we have to delete the password from user object
	// 	return res.status(200).json(user);
	// } catch (e) {
	// 	next(e);
	// }
};

const postUser = async (req, res, next) => {
	const { name, email, password,  } = req.body;
	try {
		const saveuser= new User({
			name, email, password, 
		})
		return
	} catch (error) {
		next(error)
	}

	// try {
	// 	const user = await authService.registerService({
	// 		name,
	// 		email,
	// 		password,
	// 		roles,
	// 		accountStatus,
	// 	});
	// 	return res.status(201).json(user);
	// } catch (e) {
	// 	next(e);
	// }
};

const createNewUser= async(req, res, next)=>{
	 const {name, email,password}=req.body



	 const errors =validationResult(req);
	//  console.log(error,'reee')

	 if(!errors.isEmpty()){
        return res.status(422).json({
           error:errors.array()[0].msg
        })
	}
      
	try {
		if (!name || !email || !password) {
			// throw error('User not found', 404);
			return res.status(400).json({error:'invalid data'})
		}
		
		const findUser = await User.findOne({email:email})
		if (findUser) {
			return res.status(400).json({error:'Email Allready Register'})
			
		}
		const saveuser= new User({
			name, email, password, 
		})
		const newUser =await saveuser.save()
		if (newUser) {
			
			return res.status(201).json({message:' Successfully'})
		}
		console.log(newUser)
		
	} catch (error) {
		// next(e)
		console.log(error,'rrr')
	}

}

const patchUserById = async (req, res, next) => {
	// const { userId } = req.params;
	// const { name, roles, accountStatus } = req.body;

	// try {
	// 	const user = await userService.findUserByProperty('_id', userId);

	// 	if (!user) {
	// 		throw error('User not found', 404);
	// 	}

	// 	user.name = name ?? user.name;
	// 	user.roles = roles ?? user.roles;
	// 	user.accountStatus = accountStatus ?? user.accountStatus;

	// 	await user.save();
	// 	return res.status(200).json(user);
	// } catch (e) {
	// 	next(e);
	// }
};

const deleteUserById = async (req, res, next) => {
	// const { userId } = req.params;

	// try {
	// 	const user = await userService.findUserByProperty('_id', userId);

	// 	if (!user) {
	// 		throw error('User not found', 404);
	// 	}

		await user.remove();
	// 	return res.status(203).send();
	// } catch (e) {
	// 	next(e);
	// }
	
};
const fileuploaded= async(req, res, next)=>{
	
const newFile =`${Date.now()}_${req.files.profile.name}`
const newpath =path.join(process.cwd(),'profile',newFile)

const parsefileType=req.files.profile.mimetype.split("/");
console.log(parsefileType)
if (parsefileType[1]==='pdf') {
	return res.status(400).json({error:'flie not valid '})
}
// console.log(req.files.profile.mimetype)
// console.log(req.files.profile.size)
// req.files.profile.mv(newpath)

	// console.log(req.files.image.mv())

	
	// console.log(body)
	// try {
		
	// } catch (error) {
		
	// }

}

module.exports = {
	getUsers,
	getUserById,
	postUser,
	createNewUser,
	patchUserById,
	deleteUserById,
	fileuploaded
};