const express = require('express')
const app = express()
let users = require('./MOCK_DATA.json')
const fs = require('fs')
app.use(express.json())
app.route('/api/users/:id').get((req,res)=>{
    let id = Number(req.params.id)
    let user = users.find((user)=>user.id === id)
     res.status(200).json(user)
}).post((req,res)=>{
    const body = req.body
    console.log(body)
    users.push({ ...body ,id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        if(err){
            return res.status(400).send('could not add the user')
        }
        res.status(200).send('User added')
    })
}).patch((req,res)=>{
    users[users.findIndex((user)=> user.id === req.body.id)] = req.body.name
    res.send('User updated')
   
}).delete((req,res)=>{
    let id = req.body.id
    users = users.filter((user)=>user.id !== id)
    res.send('User deleted')
    
}).get((req,res)=>{
    res.json(users[req.body.id-1])
})



app.get("/api/users",(req,res)=>{
    console.log('testing')
   return res.status.json(users)
})
app.get("/users",(req,res)=>{
    let html = `<ul>${users.map((user)=>`<li>${user.name}</li>`)}</ul>`
    res.status(200).send(html)
})
// app.get("/api/users/:id",(req,res)=>{
    
// })
app.get("/users/:id",(req,res)=>{
    let id = Number(req.params.id)
    let user = users.find((user)=>user.id === id)
     res.status(200).send(`<li>Name : ${user.name}\n id : ${user.id}`)
})
//app.post('/api/users',(req,res)=>{
   // let data = req.body
    // const fs = require('fs')
    // fs.writeFile('./MOCK_DATA.json','utf-8',{flag : 'a'},()=>res.send("new user created"))
    // console.log("new user alert")
    // res.end()
                                    //TODO
//})

app.listen(5000,()=>{
    console.log('server listening on port on : 5000')
})