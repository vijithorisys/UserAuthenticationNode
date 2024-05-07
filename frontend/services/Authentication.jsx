import axios from "axios";
import { BASE_API } from "./BaseApi";

const Authentication={
    async register(formData){
        console.log(formData)
        try{
            const response = await axios.post(`${BASE_API}/auth/register`,formData)
            return response
        }catch(error){
            return  error.response
        }
    },
    async login(formData){
        try{
            const response = await axios.post(`${BASE_API}/auth/login`,formData)
            return response
        }catch(error){
            return  error.response
        }
    }
}

export default Authentication