const mongoose = require("mongoose");
const colors = require('colors');
const user = require('./data/users');
const products = require('./data/products');
const Users = require('./modles/userModel');
const Products = require('./modles/productModel');
const Order = require('./modles/orderModel');
const connectDB = require('./config/db');

connectDB();

const importData = async()=>{
    try {
        await Order.deleteMany()
        await Products.deleteMany()
        await Users.deleteMany()

        const createUsers = await Users.insertMany(user)
        const adminUser = (createUsers[0]._id)
        console.log(`${typeof(adminUser)}`.green);
        const sampleProducts = products.map(product =>{
            return {...product, user:adminUser}
        })

        await Products.insertMany(sampleProducts)
        console.log(`Data Imported`.green);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red);
        process.exit(1);
    }
}

const destroyData = async()=>{
    try {
        await Order.deleteMany()
        await Products.deleteMany()
        await Users.deleteMany()

        console.log(`Data Destroyed`.red);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}