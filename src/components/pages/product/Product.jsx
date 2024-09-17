import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../helper/api";
import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import './Product.css'


function Product() {
    const [productData,setProductData] = useState({})
    const {productID} = useParams()
    const[loadingMoment,setLoadingMoment] = useState(false)
    useEffect(()=>{
        setLoadingMoment(true)
        getSingleProduct(productID)
        .then((data)=>setProductData(data))
        .finally(()=>setLoadingMoment(false))
    },[])
    return ( 
        <div>
            {
                loadingMoment?<RingLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                :<>
                    <h1>Single Product Page</h1>
                    <h1>Porduct ID is:{productID}</h1>
                    <img src={productData.thumbnail} alt="" />
                    <h2>{productData.title}</h2>
                </>
            }
            
        </div>
     );
}

export default Product;