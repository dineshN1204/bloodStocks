import React from 'react'
import bloodLogo from '../Assets/BloodLogo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function Navbar() {
  const auth = useAuth()
  const navigate = useNavigate()
  return (
    <nav className='main-nav'>
        <img className='blood-logo' src={bloodLogo} height='50px' width='50px' alt='home-img' onClick={() => { navigate('/') }}></img>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About us</NavLink>
        <NavLink to='/blood'>Blood Stocks</NavLink>
        {auth.user && <NavLink to='/addblood'>Add Blood</NavLink>}
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Sign up</NavLink>}
    </nav>
  )
}