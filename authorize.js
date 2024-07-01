let authorize = (req,res,next)=>{
    console.log("auth")
    let {name,password} = req.query
    if(name == 'hux' && password == 'hux123'){
        req.user = {name,password}
        next()
    }
    req.user = null
    next()
}
module.exports = authorize;