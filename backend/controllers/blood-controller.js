const bloodModel = require('../models/blood-model')

exports.addblood = (req,res)=>{
    console.log(req.body)
    const blood = new bloodModel(req.body)
    blood.save()
    res.send('blood added')
}

exports.getblood = (req,res)=>{
    console.log(req.body)
    bloodModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    
}