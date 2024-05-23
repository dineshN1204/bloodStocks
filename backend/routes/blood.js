const express = require('express')
const {addblood, getblood} = require('../controllers/blood-controller')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.json())
router.get('/',(req,res)=>{
res.send('blood page')
})
router.get('/get',getblood)
router.post('/addblood',addblood)

module.exports = router