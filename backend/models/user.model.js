
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
 name:String,
 surname:String,
 email:String,
 password:String,
 cart: {
    type: [Object],
    default: []
}
},{
    versionKey:false
})

const UserModel =  mongoose.model('user',userSchema);

module.exports = {UserModel};