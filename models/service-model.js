const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    addedByEmail: {
        type: String,
        required: true,
    },
    addedOn: {
        type: Number,
        required: false,
    },
    requestId: {
        type: Number,
        required: true,
    },
    requestType: {
        type: String,
        required: true
    },
    appName: {
        type: String,
    },
    keyFunction: {
        type: String,
    },
    requirements: {
        type: String,
    },
    whatsapp: {
        type: Number,
        required: true
    },
    offer: {
        type: Number,
        required: true,
    },
    uploadedFileName: {
        type: String,
    },
    accepted: {
        type: Object,
        required: true
    },

    subject: {
        type: String,
    },
    question: {
        type: String,
    },
    comments: {
        type: String,
    },

});

module.exports = mongoose.model('Service', ServiceSchema);