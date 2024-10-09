import ProductLayout from "./layout/ProductLayout";
import CartItem from "../../cartitem/CartItem"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../helper/api";
import { RingLoader } from "react-spinners";
import "./ProductLayout.css"
import { NotFound } from "components";

function Products() {
    const [productList,setProductList] = useState([])
    const[loadingMoment,setLoadingMoment] = useState(false)
    const [isError, setIsError] = useState({
        code: 0,
        message: "",
      });
    useEffect(()=>{
        setLoadingMoment(true)
        getAllProducts(194,0).then((data)=>{
            if (data.code === "ERR_BAD_REQUEST") {
                setIsError({ code: data.status, message: data.message });
              }else{
                setProductList(data.products)
              }
        })
        .finally(()=>setLoadingMoment(false))
    },[])
    return ( 
        <ProductLayout>
            {
            loadingMoment?<RingLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
            : isError.code !== 0 ? (
                <NotFound />
              ) :productList.map((el)=>
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