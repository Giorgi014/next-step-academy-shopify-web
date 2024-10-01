import { useContext, useEffect, useState } from "react";
import "./Categories.css"
import { Link } from "react-router-dom";
import { getAllCategories } from "components/helper/api";
import { ThemeContext } from "context/themecontext/ThemeContext";

function Categories() {
    const [categoryList,setCategoryList] = useState([])
    const {isDark} = useContext(ThemeContext)
    useEffect(()=>{
        getAllCategories()
        .then((data)=>setCategoryList(data))
    },[])
    return ( 
        <main className={isDark?"categories-page dark":"categories-page"}>
            <p className="title">Categories</p>
            <div className="category-list">
                {
                    categoryList.map((el)=>(
                        <div className="category-item" key={el.slug}>
                            <p>{el.name}</p>
                            <Link to={`/category/${el.slug}`}>View Products</Link>
                        </div>
                    ))
                }
            </div>
        </main>
     );
}

export default Categories;