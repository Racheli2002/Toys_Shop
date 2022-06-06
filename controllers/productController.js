
const { default: mongoose } = require('mongoose');
const ObjectId = require('mongoose/lib/schema/objectid');
const ProductModel = require('../models/productModel.js');

 module.exports.getAllProducts=async function(req,res){
    try{
    const Products=await ProductModel.find();
    res.send(Products);
   }
   catch (error) {
       next(error)
   }
    }
 
 module.exports.getProductsByCategory=async function(req,res){
    try{
    const cat=req.params.category;
    //let products=[]
   const products= await ProductModel.find({category:mongoose.Types.ObjectId(cat)})
   //  category.array.forEach(element => {       
   //    var oneCat=await ProductModel.find({category:mongoose.Types.ObjectId(element)})
   //    products.push(oneCat)
       
   //  });
    
      
    res.send(products);
   }
   catch (error) {
       next(error)
   }
    }

