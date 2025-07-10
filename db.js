const mongoose=require("mongoose")
const Schema=mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const ObhectIds=mongoose.Types.ObjectId;

const userSchema=new Schema({
    Firstname:String,
    Lastname:String,
    email:String,
    password:String
})
const adminSchema=new Schema({
    Firstname:String,
    Lastname:String,
    email:String,
    password:String
})
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});
const userModels=mongoose.model("User1",userSchema);
const adminModel=mongoose.model("Admin",adminSchema);
const courseModel=mongoose.model("Course",courseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);
module.exports={
    userModels,
    adminModel,
    courseModel,
    purchaseModel
}
