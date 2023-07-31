const { mongoose, Schema } = require('mongoose')
const validator =require('validator')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'minimum 3 char']
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter email in correct format"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'password min 6 chars']
    }
})
module.exports = mongoose.model('User',userSchema)