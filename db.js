const mongoose = require('mongoose')

const MongoConnect = ()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/Products').then(()=>{console.log('connected succesfully')}).catch(()=>{console.log('error')})
}

module.exports = MongoConnect()