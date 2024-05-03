const authorize=(req,res,next)=>{
    const {user}=req.query;
    if(user==='jaimin'){
        req.user={name:'jaimin',id:67}
        next()
    }
    else{
        res.status(404).send('Unauthorize')
    }
    // console.log('authorize');
    // next()
}

module.exports=authorize