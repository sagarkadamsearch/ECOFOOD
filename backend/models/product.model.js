const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    category:String,
    ingredients:String,
    about:String,
    rating:Number,
    image:String
},{
    versionKey:false
});

const productModel = new mongoose.model('product',productSchema);

module.exports = {productModel};