const {Router} = require("express");
const router = Router();
const mongoose = require("mongoose");
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")

//User Route

router.post('/signup',(req,res)=>{
    //Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username:username,
        password:password,
    })
    res.json({
        msg:"User created successfully"
    })
})

router.get('/courses',async (req,res)=>{
    //Implementin Listing all courses logic
    const response = await Course.find({});
    res.json({
        courses:response
    })
})

router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    let result = await User.updateOne({
        username:username
    },{
        "$addToSet":{
            purchasedCourses:new mongoose.Types.ObjectId(courseId)
        }
    })
    res.json({
        msg:"Purchased Completed!"
    })
});

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username:req.headers.username
    });
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    });

    res.json({
        courses:courses
    })
})


module.exports = router;