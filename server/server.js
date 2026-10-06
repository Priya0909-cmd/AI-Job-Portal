const express = require('express')
const mongose = require('mongoose')
const cors = require('cors')//allows frontend and backend to communicate with each other even through cross origin
require('dotenv').config();


const app = express();
const userModel = require('./models/User')
app.use(cors());
app.use(express.json()); //middleware


app.post('/', async (req, res) => {
    const data = req.body;
    await userModel.create({
        name:data.name,
        email:data.email,
        password:data.password,
        role:data.role
    })

    res.status(201).json({
        message:"Note created"
    })
})

app.get('/', async (req,res) => {
    const user = await userModel.find() //it always return an array

    res.status(200).json({
        message:"notes fetched successfully",
        user:user
    })
})


mongose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));