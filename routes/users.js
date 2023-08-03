const router = require('express').Router();
const {createNewUser,getUsers,fileuploaded} =require('../controllers/users');
const User = require('../models/User');
const { body } = require('express-validator');
const {authenticate} = require('../controllers/auth')
// const usersController = require('../controller/users');

/**
 * Get user by id or email
 */

// router.get('/:userId', usersController.getUserById);

/**
 * update user by id
 * @method PUT
 */

// router.put('/:userId', usersController.putUserById);

/**
 * update user by id
 * @method PATCH
 */

// router.patch('/:userId', usersController.patchUserById);

/**
 * Delete user by id
 */

// router.delete('/:userId', usersController.deleteUserById);

/**
 * Get all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method Get
 * @route api/v1/users?sort["by","name"]
 * @visibility private
 */

router.get('/users',authenticate, getUsers);

/**
 * Create new user
 */
router.post('/fileUpload',fileuploaded)

router.post('/users', 
    body("name","Name must be Required and 3 Charecter").trim().isLength({min:3}),
    body("email","Email must be Required and 10 Charecter").trim().isLength({min:10}),
    body("password","Password must be Required and 6 Charecter").trim().isLength({min:6}),

 createNewUser);

module.exports = router;