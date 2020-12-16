//jshint esversion: 10
const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');
const color = require('colors')
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const {notFound, errorHandler} = require('./middleware/errorMiddlewares');
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('uploads'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

connectDB();
app.use(morgan('dev'));


app.use('/api/products', require("./routes/productRoutes"));
app.use('/api/users', require("./routes/userRoute"));
app.use('/api/orders', require("./routes/orderRoute"));
app.use('/api/upload', require("./routes/uploadRoutes"));
app.use(notFound);
app.use(errorHandler);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log('Build file connected');
});
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${port}!`.cyan.bold));