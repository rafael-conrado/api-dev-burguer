const mongoose = require('../database');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;