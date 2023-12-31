import { useState } from "react";
import axios from 'axios'
import './Register.css'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e)=>{
        e.preventDefault();
        const {name, email, password} = data
        try{
            const {data} = await axios.post('/register', {
                name, email, password
            })
            if(data.error){
                toast.error(data.error);
            }
            else{
                setData({})
                toast.success('Login Successful, Welcome!')
                navigate('/login')
            }
        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className="Register">
        <h1>Register Yourself</h1>
        <div className="RegisterContainer">
            <form onSubmit={registerUser}>
                <div className="RegisterName">
                    <input type="text" placeholder='Enter your name'
                    value={data.name} 
                    onChange={(e)=> setData({...data, name : e.target.value})}/>
                </div>
                <div className="RegisterName">
                    <input type="email" placeholder='Enter your email'
                    value={data.email} 
                    onChange={(e)=> setData({...data, email : e.target.value})}/>
                </div>
                <div className="RegisterName">
                    <input type="password" placeholder='Enter your password'
                    value={data.password} 
                    onChange={(e)=> setData({...data, password : e.target.value})}/>
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}