let middleware = (req,res,next)=>{
    // res.json({...res,middleware_comment : `modidfied in the middleware func --${res.page_name}`})
    res.locals.middleware_comment = `data has been processed`
    console.log('middleware')
    next()  //necessary unless the response is being sent from this function 
    }
module.exports = middleware