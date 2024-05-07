import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const AuthProtect =()=>{
    const navigate = useNavigate()
    const token =localStorage.getItem('token')

    useEffect(()=>{
        if(!token){
            navigate('/')
        }
    },[])

    if(token){
        return <Outlet/>
    }
    return null
    
}
export default AuthProtect