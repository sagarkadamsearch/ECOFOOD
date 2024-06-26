const express = require('express');
const { productModel } = require('../models/product.model.js');
const {authMiddleware} = require('../Middlewares/auth.middleware.js');
const productRoute = express.Router();

productRoute.get('/filter/count',async(req,res)=>{
    const query = {};
    const {page,limit,category,order} = req.query;
    
    let orderResult = (order === 'asc') ? 1 : ((order === 'desc') ? -1 : 1);

    if(req.query.category){
        query.category = {$in:category}
    }   
    try {
        const count = await productModel.find(query).skip((page-1)*limit).limit(limit).sort({price:orderResult}).count();
        if(!count){
          return  res.json({"Msg":"Unable to find using collection name products"});
        }
        return res.status(200).send({count:count});
    } catch (error) {
        return res.json({Error:error})
    }
})

productRoute.get('/',async(req,res)=>{
    const query = {};
    const {page,limit,category,order} = req.query;
    
    let orderResult = (order === 'asc') ? 1 : ((order === 'desc') ? -1 : 1);

    if(req.query.category){
        query.category = {$in:category}
    }   
    try {
        const products = await productModel.find(query).skip((page-1)*limit).limit(limit).sort({price:orderResult});
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