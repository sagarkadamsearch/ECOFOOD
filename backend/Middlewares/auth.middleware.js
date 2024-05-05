const jwt = require('jsonwebtoken');

const authMiddleware = async(req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]

try {
    if(!token)
    {
       return res.json({"Msg":"Please provide a valid token"})
    }

   let decode =  jwt.verify(token,"demo");
   req.body.userId = decode.userId;
   next();

} catch (error) {
    return res.json({"Error":error});
} 

}

module.exports = {authMiddleware};