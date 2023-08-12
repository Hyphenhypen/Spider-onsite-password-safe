// import passwordModel from './password';
const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    passwordList: Object
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;