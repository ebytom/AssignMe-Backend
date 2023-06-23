const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    createdAt: {
        localString:{
            type: String,
            // required:true
        },
        timestamp:{
            type: Number,
            // required:true
        }
    },
});

module.exports = mongoose.model('User', UserSchema);