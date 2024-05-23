const express = require('express')
const bodyParser = require('body-parser')
const { signup,activate,signin, gettingData } = require('../controllers/auth-controllers')

const router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.send('Users Page')
})
router.get('/get',gettingData)
router.post('/signup',signup)
router.get('/activate/:activationCode',activate)
router.post('/signin',signin)


module.exports = router