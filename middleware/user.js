const {User} = require("../db/index");

function userMiddleware(req,res,next){
    // Implement user auth logic
    // you need to check the headers and validate the user from the user DB
    const username=req.headers.username;
    const password=req.headers.password;
    User.findOne({
        username:username,
        password:password,
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"User doesn't exists"
            })
        }
    })
}

module.exports = userMiddleware;
