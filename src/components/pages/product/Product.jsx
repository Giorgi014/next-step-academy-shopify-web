import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../helper/api";
import { useEffect, useState } from "react";
import './Product.css'


function Product() {
    const [productData,setProductData] = useState({})
    const {productID} = useParams()
    useEffect(()=>{
        getSingleProduct(productID)
        .then((data)=>setProductData(data))
    },[])
    return ( 
        <div>
            <h1>Single Product Page</h1>
            <h1>Porduct ID is:{productID}</h1>
            <img src={productData.thumbnail} alt="" />
            <h2>{productData.title}</h2>
        </div>
     );
}

export default Product;