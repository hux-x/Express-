let express = require('express')
let app = express()
let middleware = require('./Logger')
let auth = require('./authorize')
const authorize = require('./authorize')
console.log('/api',"testing")
// let middleware = (req,res,next)=>{
// // res.json({...res,middleware_comment : `modidfied in the middleware func --${res.page_name}`})
// res.locals.middleware_comment = `data has been processed`
// next()  //necessary unless the response is being sent from this function 
// }
//app.use(middleware)
// app.use([authorize,middleware])
app.get('/user/query',[authorize,middleware],(req,res)=>{
console.log("Home")
//res.status(200).json({page_name : "Home",middleware_comment : res.locals.middleware_comment})
if(req.user){
    res.status(200).json(req.user)
}else{
    res.status(401).send("Unauthorized")
}
})
app.get('/about',(req,res)=>{
console.log("About")
// res.status(200).json({page_name : "About",middleware_comment : res.locals.middleware_comment})
res.send("About")
})
app.get('/contact',(req,res)=>{
console.log("Contact")
res.status(200).json({page_name : "Contact",middleware_comment : res.locals.middleware_comment})
})

app.listen(5000,()=>{
    console.log("server listening on port : 5000")
})