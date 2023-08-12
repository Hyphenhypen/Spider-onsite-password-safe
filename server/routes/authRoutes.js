const express = require('express');
const passwordModel = require('../models/password')
const User = require('../models/user')
const {hashPassword} = require('../helpers/auth')
const router = express.Router();
const cors = require('cors');
const { test} = require('../controllers/authController');

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', async (req, res)=>{
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
})

router.post('/login', async(req, res)=>{
    try{
        const {email, password, organisation, orgpassword} = req.body;
        // check if name was entered
        if(!email){
            return res.json({
                error: 'email is required'
            })
        };
        if(!organisation){
            return res.json({
                error: 'organisation name is required'
            })
        };
        // check for password entered or length of password is more than 6
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be more than 6 characters'
            })
        };
        if(!orgpassword || orgpassword.length < 6){
            return res.json({
                error: 'organisation password is required and should be more than 6 characters'
            })
        };
        //  check email 
        const hashedOrgPassword = await hashPassword(orgpassword)
        const isAlreadyExists = User.findOne({email})
        if(isAlreadyExists){
            const user = await passwordModel.create({
                email, organisation, orgpassword: hashedOrgPassword
            })
            return res.json(user)
        }
    }
    catch(error){
        console.log(error)
    }
})

router.put('/updatePassword', async(req, res)=>{
    try{
        const {email, password, organisation, orgpassword, newpassword} = req.body;
        // check if name was entered
        if(!email){
            return res.json({
                error: 'email is required'
            })
        };
        if(!organisation){
            return res.json({
                error: 'organisation name is required'
            })
        };
        // check for password entered or length of password is more than 6
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be more than 6 characters'
            })
        };
        if(!orgpassword || orgpassword.length < 6){
            return res.json({
                error: 'organisation password is required and should be more than 6 characters'
            })
        };

        if(!newpassword || newpassword.length < 6){
            return res.json({
                error: 'organisation password is required and should be more than 6 characters'
            })
        };
        //  check email 
        const hashedOrgPassword = await hashPassword(orgpassword)
        const isAlreadyExists = passwordModel.findOne({organisation}) && passwordModel.findOne({orgpassword});
        if(isAlreadyExists){
            isAlreadyExists.orgpassword = hashedOrgPassword
            // return res.json(isAlreadyExists)
        }
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router