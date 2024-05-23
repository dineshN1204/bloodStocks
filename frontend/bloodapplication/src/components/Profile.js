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
                <h1>Welcome</h1> <h3>{auth.user}</h3> 
                <button className='btn-logout' onClick={handleLogout}>Logout</button>
            </div>
        
    )
}
