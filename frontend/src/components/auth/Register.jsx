import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Authentication from "../../../services/Authentication";
import { toast } from "react-toastify";

const Register=()=>{
    const [formdData,setFormData]= useState({
        firstName :'',
        lastName:'',
        email:'',
        password:''
    })
    const submitHandler=async()=>{
        try{
            const response = await Authentication.register(formdData)
            if(response.statusText ==='OK'){
                toast.success(response.data.message)
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
        <input type="text" placeholder="firstName" onChange={(e)=>setFormData({...formdData,firstName:e.target.value})}></input>
        <input type="text" placeholder="lastName" onChange={(e)=>setFormData({...formdData,lastName:e.target.value})}></input>
        <input type="email" placeholder="Email" onChange={(e)=>setFormData({...formdData,email:e.target.value})}></input>
        <input type="password" placeholder="password" onChange={(e)=>setFormData({...formdData,password:e.target.value})}></input>
        <button onClick={submitHandler}>Submit</button>

        </>
    )
}

export default Register