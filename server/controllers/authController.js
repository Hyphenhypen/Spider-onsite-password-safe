const User = require('../models/user')
const Question = require('../models/question')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const test = (req, res)=>{
    res.json('test is working')
}
//Register End Point
const registerUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        // check if name was entered
        if(!name){
            return res.json({
                error: 'name is required'
            })
        };
        // check for password entered or length of password is more than 6
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be more than 6 characters'
            })
        };
        //  check email 
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error: 'Email is already used'
            })
        }

        const hashedPassword = await hashPassword(password)
        //create user in database
        const user = await User.create({
            name, email, password: hashedPassword
        })
        return res.json(user)
    }
    catch(error){
        console.log(error)
    }
}

// Login EndPoint
const loginUser= async (req, res)=>{
    try {
        const {email, password} = req.body;
        //check if user exits
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No User Found'
            })
        }

        //check if password match
        const match = await comparePassword(password, user.password);
        if(match){
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token)=>{
                if(err) throw err
                res.cookie('token', token).json(user)
            })
        }
        else{
            res.json({
                error: "Password didn't match"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

// Generating profile for login user
const getProfile=(req, res)=>{
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user)=>{
            if(err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

// Generating all profiles for search bar
const allProfile = async(req, res) =>{
    try {
        const allUser = await User.find({});
        res.json(allUser);
    } catch (error) {
        console.log(error)
    }
}


// Generating all profiles for search bar
const allQuestion = async(req, res) =>{
    try {
        const Solvequestion = await Question.find({});
        res.json(Solvequestion);
    } catch (error) {
        console.log(error)
    }
}


// Posting request for questions
const createQuizz = async(req, res) =>{
    try{
        const {questionName, option, correctAnswer} = req.body;
        // check if question was entered
        if(!questionName){
            return res.json({
                error: 'question is required'
            })
        };
        // check if options was entered
        if(!option.option1){
            return res.json({
                error: 'First option is required'
            })
        };

        if(!option.option2){
            return res.json({
                error: 'Second option is required'
            })
        };

        if(!option.option3){
            return res.json({
                error: 'Third option is required'
            })
        };

        if(!option.option4){
            return res.json({
                error: 'Fourth option is required'
            })
        };

        if(!correctAnswer){
            return res.json({
                error: 'Enter the answer'
            })
        };
        //  check question  
        const exist = await Question.findOne({questionName});
        if(exist){
            return res.json({
                error: 'Question already exists'
            })
        }

        //create question in database
        const question = await Question.create({
            questionName, option ,correctAnswer
        })
        return res.json(question)
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    allProfile,
    createQuizz,
    allQuestion
}