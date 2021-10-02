let join_success = async (req,res)=>{
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let hashedpw = chash(userpw); //chash 만들어야 함
    /* let result = await User.create({
        userid,userpw:hash
    }) 
    res.json(result)
    */
}

module.exports = {
    join_success
}