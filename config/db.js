//jshint esversion: 10
const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/proShop',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;