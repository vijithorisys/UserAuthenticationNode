import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Authentication from "../../../services/Authentication";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate = useNavigate()
    const[formData,setFormData] = useState({
        email:'',
        password:''
    })

    const loginHandler =async()=>{
        try{
            const response = await Authentication.login(formData)
            if(response.statusText==='OK'){
                toast.success(response.data.message)
                localStorage.setItem('token', response.data.token)
                navigate('/employee')
            }else{
                toast.error(response.data.message)
            }
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <Navbar/>
        <h2>Login</h2>
        <input type="email" placeholder="email" onChange={(e)=>setFormData({...formData,email:e.target.value})}></input>
        <input type="password" placeholder="password" onChange={(e)=>setFormData({...formData,password:e.target.value})}></input>
        <button onClick={loginHandler}>Login</button>
        </>
    )
}

export default Login