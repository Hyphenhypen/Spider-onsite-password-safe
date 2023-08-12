const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
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

module.exports = {
    test,
    registerUser,
}