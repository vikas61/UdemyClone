const mongoose = require("mongoose");

// Connnect to MongoDb

mongoose.connect(process.env.MONGODB_URI);

// Define Schema
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String,
});

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number,
});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',userSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports ={
    Admin,
    User,
    Course,
}
