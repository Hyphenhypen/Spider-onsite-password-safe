const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();

const {mongoose} = require('mongoose');

// Database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database Connected'))
.catch((err)=>console.log('DataBase not connected', err))

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/', require('./routes/authRoutes'))
const port = 8080;
app.listen(port, ()=>console.log(`Server is running at ${port}`));
