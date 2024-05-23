const mongoose = require('mongoose')

const bloodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }
})

const bloodModel = mongoose.model('addblood',bloodSchema)

module.exports = bloodModel