const {Admin}=require("../db/index");

// Middleware for handeling auth
function adminMiddleware(req,res,next){
    // iMPLEMENT ADMIN AUTH LOGIN
    // You need to check the headers and validate the admin from the admin DB
    const username=req.headers.username;
    const password=req.headers.password;
    Admin.findOne({
        username:username,
        password:password,
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg:"Admin doesn't exists"
            })
        }
    })
}

module.exports = adminMiddleware;
