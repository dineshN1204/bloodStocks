import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [data,setData] =useState([])
    const navigate = useNavigate()
    const emailRef=useRef()
    const auth = useAuth()
    useEffect(()=>{
      emailRef.current.focus()
    },[])
    useEffect(()=>{
      axios.get(`http://localhost:3001/users/get`)
      .then(res=>{setData(res.data);console.log(res.data)})
      .catch(err=>console.log(err))
    },[])

const handleSignin =(e)=>{
  e.preventDefault()
  axios.post(`http://localhost:3001/users/signin`,{email,password})
  .then(res=>{console.log(res.data);
    auth.login(res.data.user['username']);
  })
  .catch(err=>console.log(err))
  
  navigate('/')
}
  return (
    <div>
        <form onSubmit={handleSignin}>
        <label>Email</label><br/>
            <input type='email' ref={emailRef} value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}