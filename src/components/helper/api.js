import axios from "axios";

const baseUrl = "https://dummyjson.com/";

export const getAllProducts = async (limit, skip) => {
  try {
    const resp = await axios.get(`${baseUrl}products`, {
      params: {
        limit,
        skip,
      },
    });
    return resp.data;
  } catch (error) {
    return error.code
  }
  
};

export const getSingleProduct = async (id) => {
  try {
    const resp = await axios.get(`${baseUrl}product/${id}`);
    return resp.data;
  } catch (error) {
    return error
  }
};

export const getAllCategories = async () => {
  try {
    const resp = await axios.get(`${baseUrl}products/categories`);
    return resp.data;
  } catch (error) {
    return error.code
  }
  
};
export const getProductsByCategory = async (id) => {
  try {
    const resp = await axios.get(`${baseUrl}products/category/${id}`);
    return resp.data.products;
  } catch (error) {
    return error
  }
  
};
export const getToken = async (userInfo) => {
  try {
    const resp = await axios.post(`${baseUrl}auth/login`, userInfo);
    return resp.data.accessToken;
  } catch (error) {
    return error
  }
};
export const getDataUsingToken = async (token) => {
  try{
    const resp = await axios.get(`${baseUrl}user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(!resp.status===200 && !resp.status===201){
      throw new Error("Could not get data")
    }else{
      return resp.data;
    }
  }catch(error){
    return false
  }
};
