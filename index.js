const express = require('express')
const app  = express()
require('./db')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use('/uploads',express.static('uploads'))
const Product = require('./Model/product')

app.use('/api/',require('./Routes/Product'))

app.get('/',(req,res)=>{
    res.send('hello world')
})



app.listen(5000,()=>{
    console.log('server is run on 5000 port')
})