const express = require('express');
const { productModel } = require('../models/product.model');
const authMiddleware = require('../Middlewares/Auth.middleware');
const productRoute = express.Router();


productRoute.get('/',async(req,res)=>{
    const query = {};
    const {page,limit,category} = req.query;
  
    if(req.query.category){
        query.category = {$in:category}
    }   
  
    try {
        const products = await productModel.find(query).skip((page-1)*limit).limit(limit);
        if(!products){
          return  res.json({"Msg":"Unable to find using collection name products"});
        }
        
        return res.status(200).send(products);
    } catch (error) {
        return res.json({Error:error})
    }
})

productRoute.get('/:productId',async(req,res)=>{
    const {productId} = req.params;

    try {
        const product = await productModel.findById(productId);

        if(!product){
            res.json({"Msg":"Product not found!"});
        }

        return res.send(product);

    } catch (error) {
        return res.json({Error:error})
    }
})


module.exports = {productRoute};