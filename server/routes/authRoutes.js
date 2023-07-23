const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, allProfile, createQuizz, allQuestion} = require('../controllers/authController');

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/create', createQuizz)
router.get('/profile', getProfile)
router.get('/allProfile', allProfile)
router.get('/questions', allQuestion)
module.exports = router