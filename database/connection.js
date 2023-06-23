const mongoose = require("mongoose");

module.exports.connectDB = async () => {
    mongoose.set('strictQuery', true)
    const dbinstance = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected")
    return dbinstance;
}