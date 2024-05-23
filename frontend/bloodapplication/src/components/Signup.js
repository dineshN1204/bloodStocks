import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const userNameRef = useRef()
    const navigate = useNavigate()
useEffect(()=>{
  userNameRef.current.focus()
},[])
    const handleSignup = (e)=>{
      e.preventDefault()
      axios.post(`http://localhost:3001/users/signup`,{
      username,email,password
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    navigate('/login')
    }

  return (
    <div>
        <form onSubmit={handleSignup}>
            <label>Name</label><br/>
            <input type='text' style={{ textTransform: 'capitalize' }} ref={userNameRef} value={username} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
            <label>Email</label><br/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Sign up</button>

        </form>
    </div>
  )
}