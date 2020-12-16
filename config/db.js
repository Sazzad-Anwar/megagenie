//jshint esversion: 10
const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        if(process.env.NODE_ENV === 'development'){
            const conn = await mongoose.connect('mongodb://localhost:27017/proShop',{
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

        }else{
            const conn = await mongoose.connect('mongodb+srv://sazzadzihan12345:sizan12345@cluster0.j2ebl.mongodb.net/proShop?retryWrites=true&w=majority',{
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
        }

    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;