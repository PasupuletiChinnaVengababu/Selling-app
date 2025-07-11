
const jwt=require("jsonwebtoken")
const JWT_SECRET="PCVB"

function Middleware(req,res,next){
    const token =req.headers.token;
    console.log(token)
    if(token){
          const user=jwt.verify(token,JWT_SECRET);
          console.log(user)
          if(user){
             req.id=user.id;
             next();
    }
    }
  

}
module.exports={
    Middleware
}