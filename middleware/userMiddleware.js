
const jwt=require("jsonwebtoken")
const JWT_SECRET="PCVB"

function Middleware(req,res,next){
    const token =req.headers.token;
    const user=jwt.verify(token,JWT_SECRET);
   console.log(user.id)
    if(user){
        req.id=user.id;
        next();
    }

}
module.exports={
    Middleware
}