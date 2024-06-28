let express = require('express')
let app = express()
console.log("testing")
// express.get('/',(req,res)=>{
//     res.status(200).send("Home page")
// })
let path = require('path')

// app.use(express.static('./public'))

// app.use(express.static(path.join('./navbar-app')));


// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

// })

let data = require('./data')
console.log(data.products)

app.get('/',(req,res)=>{

    res.send("<h1>Home Page</h1> <a href = '/api/products'> Products </a> ")
})
app.get('/api/products',(req,res)=>{
    
    res.json( data.products.map((product)=>{
        let {name,id,image} = product
        return {id,name,image}
    }))
})
app.get('/api/products/:id',(req,res)=>{
    let singleProduct = data.products.find((product)=> product.id === Number(req.params.id))
    if(!singleProduct){
        res.status(404).send("could not find the product")
    }
    res.json(singleProduct)
})
app.get('/api/query',(req,res)=>{
    let params = req.query
    console.log(params)
    let {search,limit} = params
    let response = [...data.products]
    if(search){
        response = response.filter((product)=>{
           return product.name.startsWith(search)
        }
     )
    }
    if(limit){
       response = response.slice(0,Number(limit))
    }
    res.json(response)


})

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
    console.log("server listening on port : 5000")
})