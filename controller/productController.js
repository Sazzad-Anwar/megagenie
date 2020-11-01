//jshint esversion: 10
const Product = require('../modles/productModel');
const asyncHandler = require('express-async-handler')

exports.getProducts = asyncHandler(async (req, res) => {
    if (req.params.id === '' || req.params.id === null || req.params.id === undefined) {
      const products = await Product.find();
      res.json(products);
    } else {
      const product = await Product.findById({ _id: req.params.id });
      if (product) {
        res.json(product);  
      } else {
        res.status(404).json({ msg: 'Product is not found' , isSuccess: false, code: 404 });
      }
    }
});
