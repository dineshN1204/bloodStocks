const UserModel = require('../models/user-model');
const {v4:uuidv4} = require('uuid')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

exports.gettingData = async (req,res)=>{
    console.log(req.body);
    UserModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
}

exports.signup = async (req, res) => {
  const { email, password, username } = req.body
  console.log(email, password, username)

  let user =await UserModel.findOne({email})
  if(user){
    return res.status(400).json({message:'Email already registered'})
  }

  //generate random activation code
  const activationCode = uuidv4()
  
  //encrypt password 
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password,salt)

  user = new UserModel({
    username,
    email,
    password:hashPassword,
    activationCode
  })

  await user.save()
  //email sending code
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    },
    // secure:true
  })
  const activationLink = `http://localhost:${process.env.PORT}/auth/activate/${activationCode}`

  //mailoptions that send for the user
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Please verify yout email address`,
    text:`Click the below link to verify your email address ${activationLink}`
  }

  transport.sendMail(mailOptions,(err,info)=>{
    if(err){
        return res.status(500).json({message:'Cannot send activation link',err})
    }
    else {
        return res.status(200).json({message:'Activation link sent to your email please verify to proceed login',info})
    }
  })

}

//activating email for signup
exports.activate = async (req,res)=>{
    const {activationCode} = req.params
    let user = await UserModel.findOne({activationCode})
    if(!user){
        res.status(500).json({message:'Not sent activation link to the mail'})
    }
    user.isActivated = true
    user.save()
    res.status(200).json({message:'Account activated successfully'})
}

//login
exports.signin = async (req,res)=>{
    const {email, password} = req.body
    let user = await UserModel.findOne({email}) 
    if(!user){
      return res.status(400).json({message:'Email not found'})
    }

    const isMatching = await bcrypt.compare(password,user.password)
    if(!isMatching){
      return res.status(400).json({message:'Incorrect password'})
    }
    if(!user.isActivated){
      return res.status(400).json({message:'Account has not yet activated please check your email and activate first to login'})
    }

    return res.status(200).json({
      message:'Login successfull',
      user
    })
}




