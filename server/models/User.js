const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['candidate', 'recruiter'],
        required: true,
    },
}, {timestamps: true});//use to add updatedAt and createdAt timestaps at the end of creating a new user

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;