import { useState } from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
        organisation: '',
        orgpassword:'',
        newpassword: '',
    })

    const loginUser = async (e)=>{
        e.preventDefault();
        const {email, password,organisation, orgpassword, newpassword} = data
        try {
            const {data} = await axios.post('/updatePassword', {
                email, password, organisation, orgpassword, newpassword
            });
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                navigate('/uploadPassword')
            }
        } catch (error) {
            
        }
    }
  return (
      <div className="Login">
        <h1>Update Password</h1>
        <div className="LoginContainer">
            <form onSubmit={loginUser}>
                <div className="LoginName">
                    <input type="email" placeholder='Enter your email'
                    value = {data.email}
                    onChange={(e)=>setData({...data, email: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter your password'
                    value = {data.password}
                    onChange={(e)=>setData({...data, password: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter organisation'
                    value = {data.organisation}
                    onChange={(e)=>setData({...data, organisation: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter organisations password'
                    value = {data.orgpassword}
                    onChange={(e)=>setData({...data, orgpassword: e.target.value})}
                    />
                </div>
                <div className="LoginName">
                    <input type="password" placeholder='Enter organisations password'
                    value = {data.newpassword}
                    onChange={(e)=>setData({...data, newpassword: e.target.value})}
                    />
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}