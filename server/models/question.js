const mongoose = require('mongoose')
const {Schema} = mongoose

const questionSchema = new Schema({
    questionName: {
        type: String,
        unique: true,
    },
    option: 
    {
        option1: {
            type: String,
            unique: true
        },
        option2: {
            type: String,
            unique: true
        },
        option3: {
            type: String,
            unique: true
        },
        option4: {
            type: String,
            unique: true
        }, 
    },

    correctAnswer:{
        type: String
    }
})

const questionModel = mongoose.model('question', questionSchema);

module.exports = questionModel;