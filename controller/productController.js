//jshint esversion: 10
const Product = require('../modles/productModel');
const asyncHandler = require('express-async-handler')

exports.getProducts = asyncHandler(async (req, res) => {

    const keyword = req.query.keyword?{
      name:{
        $regex:req.query.keyword,
        $options:'i'
      }
    }:{}    

    if (req.params.id === '' || req.params.id === null || req.params.id === undefined) {
      const products = await Product.find({...keyword});
      res.json(products);
    }
    
    else {
      const product = await Product.findById({ _id: req.params.id });
      if (product) {
        res.json(product);  
      } else {
        res.status(404).json({ msg: 'Product is not found' , isSuccess: false, code: 404 });
      }
    }
});

exports.deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById({ _id: req.params.id });
      if (product) {
        await product.remove();
        res.json({message:'Product removed'});
      } else {
        res.status(404).json({ msg: 'Product is not found' , isSuccess: false, code: 404 });
      }
});

exports.createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name:'sample Name',
      price:0,
      user:req.user._id,
      image:'/images/sample.jpg',
      brand:'Sample Brand',
      category:'Sample Category',
      countInStock: 0,
      numReviews:0,
      description: 'Sample description'
    });

    const createProduct = await product.save();
    res.status(200).json(createProduct);
});

exports.updateProduct = asyncHandler(async (req, res) => {
    const { name,price,description,image,category, brand, countInStock } = req.body;

    const product = await Product.findById(req.params.id)

    if(product){

      product.name = name,
      product.price = price,
      product.description = description,
      product.image = image,
      product.brand = brand,
      product.category = category,
      product.countInStock = countInStock

      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    }else{
      res.status(404);
      throw new Error('Product not found');
    }
});

exports.createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id)

    if(product){
      const alreadyReviewed = product.reviews.find(r=> r.user.toString() === req.user._id.toString());

      if(alreadyReviewed){
        res.status(400)
        throw new Error('Product already reviewed');
      }else{
        const review = {
          name:req.user.name,
          rating: Number(rating),
          comment,
          user: req.user._id
        }

        product.reviews.push(review);

        product.numReviews = product.reviews.length;

        product.rating = product.reviews.reduce((acc,item)=> item.rating + acc, 0)/product.reviews.length;

        await product.save();
        res.status(200).json({message:'Review added'})
      }

    }else{
      res.status(404);
      throw new Error('Product not found');
    }
});
