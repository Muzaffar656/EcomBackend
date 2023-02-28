const express = require('express')
const router = express.Router()
const Product = require('../Model/product')
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'../uploads'),(error,success)=>{
            if(error){
                console.log('error')
            }
        })
    },
    filename:(req,file,cb)=>{
    const name = Date.now()+'-'+file.originalname;
    cb(null,name,(error,succes)=>{
        if(error){
            console.log('error')
        }
    })
    }
})
const upload = multer({storage:storage})

router.get('/products',async (req,res)=>{
    const product = await Product.find({});
    res.json(product)
})
router.get('/product/:id',async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.json(product)
})
router.post('/createProduct',upload.single('image'),async(req,res)=>{
    console.log(req.file)
    const {name,price,brand,category} = req.body
    const product = new Product({
        name,
        price,
        brand,
        category,
        image:req.file.filename
    })
    const save = await product.save()
 
    res.json(save)
})



module.exports = router