const session = require('express-session');

const auth =  (req,res,next)=>{
    if(session.authData == undefined){
        res.redirect('/user/login?msg=로그인이 필요한 서비스 입니다.')
    }else{
        next()
    }
}

module.exports=auth;