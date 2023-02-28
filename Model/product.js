const mongoose = require('mongoose')

const data = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type : String,
        required:true
    }

})

const Product = mongoose.model('product',data)

module.exports = Product;