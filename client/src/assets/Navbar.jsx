import React from 'react'
import { useNavigate } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='nav-container'>
            <div className="left"><h3>Home</h3></div>
            <div className="right">
                <button id='button' onClick={(e)=>navigate('/updatePassword')}>Update The Password</button>
                <button id='button' onClick={(e)=>navigate('/login')}>Upload Password</button>
                <button id='button' onClick={(e)=>navigate('/register')}>Register</button>
            </div>
        </div>
    )
}