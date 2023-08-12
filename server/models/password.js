const mongoose = require('mongoose')
const {Schema} = mongoose

const passwordSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },
    organisation:{
        type: String,
        unique: true,
    },
    orgpassword:{
        type: String,
        unique: true,
    }
})

const passwordModel = mongoose.model('passwords', passwordSchema)

module.exports = passwordModel