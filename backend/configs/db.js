const mongoose = require('mongoose')
const connectDb = ()=>{
    mongoose.connect(process.env.DB_URL)
    mongoose.connection.on('connected',()=>{
        console.log('MongoDB is connected successfully');
    })
}
module.exports = connectDb
