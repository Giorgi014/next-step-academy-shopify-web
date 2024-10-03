import { useParams } from "react-router-dom";
import ProductLayout from "components/layouts/productslayout/ProductLayout";
import { useContext, useEffect, useState } from "react";
import { CartItem } from "components";
import { getProductsByCategory } from "components/helper/api";
import { ThemeContext } from "context";
import "./Category.css"


function Category() {
    const {categoryID} = useParams()
    const [categoryList,setCategoryList] = useState([])
    const {isDark} = useContext(ThemeContext)
    useEffect(()=>{
        getProductsByCategory(categoryID)
        .then((data)=>setCategoryList(data))
    },[])
    return ( 
        <div className={isDark?"category-page dark":"category-page"}>
            <div className="title">
                <p>{categoryID}</p>
            </div>
            <ProductLayout>
                {
                    categoryList.map((el)=>(
                        <CartItem 
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            price={el.price}
                            discountPercentage={el.discountPercentage}
                            image={el.thumbnail}
                        />
                    ))
                }
            </ProductLayout>
        </div>
     );
}

export default Category;