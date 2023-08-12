import React from 'react'
import './Home.css'
import Navbar from '../assets/Navbar'
import { useNavigate } from "react-router-dom";
import homeimage from './home-image2.png'
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='container'>
      <div className='main-container'>
        <div className='left-container'>
          <h1>Move fast and securely with the password manager trusted by millions.</h1>
          <h3>Drive collaboration, boost productivity, and experience the power of open source with Bitwarden, the easiest way to secure all your passwords and sensitive information.</h3>
          <button id='button1' onClick={()=>navigate('/register')}>Get Started Here</button>
        </div>
        <div className='right-container'>
          <img src={homeimage} alt="home-image" srcset="" />
        </div>
      </div>
    </div>
    </>
  )
}
