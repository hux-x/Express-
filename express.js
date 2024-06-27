let express = require('express')
let app = express()
console.log("testing")
// express.get('/',(req,res)=>{
//     res.status(200).send("Home page")
// })
let path = require('path')

// app.use(express.static('./public'))
app.use(express.static(path.join('./navbar-app')));
// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

// })


app.get('/about',(req,res)=>{
    // res.status(200).send("About page")
    res.json({message : "Hello!!!"})
})
app.get('/contact',(req,res)=>{
    res.status(200).send("Contact page")
})
app.all('*',(req,res)=>{
res.status(404).send("<h1>resource not found</h1>")
})
app.listen(5000,()=>{
    console.log("user made a request")
})