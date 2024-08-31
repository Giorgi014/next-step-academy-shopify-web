import axios from 'axios'

export const getAllProducts = async (limit,skip)=>{
    const resp = await axios.get("https://dummyjson.com/products",{
        params:{
            limit,skip
        }
    })
        
    return resp.data
}