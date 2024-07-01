let express = require('express')
let app = express()
let data = [1,3,4,5]
app.post('/',(req,res)=>{
let data = req.body
console.log(data)

})

app.listen(5000,()=>{
    console.log('server listening on port : 5000')
})