import axios from "axios";
import { BASE_API } from "./BaseApi";

const EmployeeApi={
    async EmployeeList(){
        try{
            const token = localStorage.getItem('token')
            const response = await axios.get(`${BASE_API}/employee`,{
                headers:{
                    Authorization: `Bearer ${token}` 
                }
            })
            return response.data
        }catch(error){
            return  error.response
        }
    }
}

export default EmployeeApi