import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <img className='home-img' src='https://images.pexels.com/photos/12193090/pexels-photo-12193090.jpeg?cs=srgb&dl=pexels-franco30-12193090.jpg&fm=jpg' alt='home-img'></img>

    <h1 className='home-text'> Keep Blood Bank shelves full. You may need Blood someday.</h1>
    <button className='home-button' onClick={()=>{navigate('/blood')}}>Click here for Blood Details</button>
    </div>
  )
}
