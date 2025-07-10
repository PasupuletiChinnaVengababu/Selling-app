const express=require("express");
const mongoose=require("mongoose")
const { userRouter } = require("./Routes/users");
const { adminRouter } = require("./Routes/admins");

const app=express();
mongoose.connect("mongodb+srv://amchinnavengababu:xebuMHvrUlwlV93Z@cluster0.qotcnag.mongodb.net/Selling-app")
// mongoose.connect('mongodb+srv://amchinnavengababu:qotcnag.mongodb.net/')
//userProfile(app)
app.use(express.json())
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.listen(3000)