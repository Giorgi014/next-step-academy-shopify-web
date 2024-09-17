import ProductLayout from "./layout/ProductLayout";
import CartItem from "../../cartitem/CartItem"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../helper/api";
import { RingLoader } from "react-spinners";
import "./ProductLayout.css"

function Products() {
    const [productList,setProductList] = useState([])
    const[loadingMoment,setLoadingMoment] = useState(false)
    useEffect(()=>{
        setLoadingMoment(true)
        getAllProducts(194,0).then((data)=>setProductList(data.products))
        .finally(()=>setLoadingMoment(false))
    },[])
    return ( 
        <ProductLayout>
            {
            loadingMoment?<RingLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
            :productList.map((el)=>
                <CartItem
                    key={el.id}
                    title={el.title} 
                    id={el.id} 
                    category={el.category} 
                    image={el.thumbnail} 
                    price={el.price}
                    discountPercentage={el.discountPercentage}
                />)
            }
        </ProductLayout>
     );
}

export default Products;