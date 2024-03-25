const {UserModel} = require('../models/user.model');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const e = require('express');
const authMiddleware = require('../Middlewares/Auth.middleware');
const { productModel } = require('../models/product.model');
const UserRoute = express.Router();


UserRoute.post('/create',async(req,res)=>{
   const {name,surname,email,password} = req.body;
 
   try {
     const user = await UserModel.findOne({email});
     if(user){
        return res.json({Msg:"User already present in system"});
     }
     const pass = await bcrypt.hash(password,5,async(err,result)=>{
         if(!result){
            return res.json({error:"Please provide a password"});
         }
         const newUser = UserModel({name,surname,email,password:result});
         await newUser.save();  
         return res.json({Msg:"User account creation successfully"});
     });     
   } catch (error) {
       return res.send({Error:error});
   }
})

UserRoute.post('/login',async(req,res)=>{
   const {email,password} = req.body;

   try {
       const user = await UserModel.findOne({email});

       if(!user){
        return res.json({"Msg":"User not found! Please register first."});
       }

        bcrypt.compare(password,user.password,(err,result)=>{
          if(!result){
            console.log("Helo");
            return res.json({"Msg":"Please enter a valid creditionals!"});
          }
          else{
            const token = jwt.sign({
               email,
               userId:user._id
              },
              "demo"
              )
              return res.json({Msg:"Login Success!",token,data:{name:user.name,surname:user.surname}});
          }
       })
   } catch (error) {
       return res.json({Error:error});
   }
})

UserRoute.get('/cart/addItem/:productId',authMiddleware,async(req,res)=>{

  const {productId} = req.params;

   if(!productId){
      res.json({"Msg":"Please provide product Id!"});
   }
   
   try {

      let userCart = await UserModel.findById(req.body.userId);
      
      userCart = userCart.cart;

        for(let i=0;i<userCart.length;i++){
         if(userCart[i]._id==productId){
            return res.json("Product already present!");
         }
      }
      
      let product = await productModel.findById(productId);

      if(!product){
         res.json({"Msg":"Product with provided Id is not found!"});
      }
     
      
     let newProduct = {...product._doc};

     newProduct.total = product.price;
     newProduct.quantity = 1;
     

      const user = await UserModel.findByIdAndUpdate(
         req.body.userId, // Assuming req.userId contains the user's _id
         { $push: { cart: newProduct } }, // Push the req.body (assuming it's the item to be added) into the cart array
         { new: true } // Return the updated document
     );
      
     return res.json({"Msg":"success"});

   } catch (error) {
       return res.json({"Error":error})
   }
})

UserRoute.get('/cart',authMiddleware,async(req,res)=>{
  try {
    const user = await UserModel.findById(req.body.userId);
    const userCart = user.cart;
    return res.send(userCart); 
  } catch (error) {
    return res.json({"Error":error});
  }
})


module.exports = {UserRoute};