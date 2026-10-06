const express = require('express')
const mongose = require('mongoose')
const cors = require('cors')//allows frontend and backend to communicate with each other even through cross origin
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json()); //middleware

app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('API is running')
})


mongose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));