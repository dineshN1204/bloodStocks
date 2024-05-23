import React from 'react'
import { useAuth } from './AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    return (
        <div>
                <h1 style={{marginBottom:'10px'}}>Welcome</h1> <h3 style={{marginBottom:'10px'}}>{auth.user}</h3> 
                <button className='btn-logout' style={{border:'none',padding:'10px 15px', backgroundColor:'rgb(143, 27, 27)',borderRadius:'8px',color:'white',cursor:'pointer'}} onClick={handleLogout}>Logout</button>
            </div>
        
    )
}
