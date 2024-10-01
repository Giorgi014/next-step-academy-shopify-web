import axios from 'axios'

const baseUrl = "https://dummyjson.com/"

export const getAllProducts = async (limit,skip)=>{
    const resp = await axios.get(`${baseUrl}products`,{
        params:{
            limit,skip
        }
    })
        
    return resp.data
}

export const getSingleProduct = async(id)=>{
    const resp = await axios.get(`${baseUrl}product/${id}`)
    return resp.data
}

export const getAllCategories = async()=>{
    const resp = await axios.get(`${baseUrl}products/categories`)
    return resp.data
}
export const getProductsByCategory = async(id)=>{
    const resp = await axios.get(`${baseUrl}products/category/${id}`)
    return resp.data.products
}
