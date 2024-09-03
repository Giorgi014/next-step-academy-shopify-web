import CartItem from '../../cartitem/CartItem';
import ProductLayout from '../../layouts/productslayout/ProductLayout';
import './Home.css'
import { getAllProducts } from "../../helper/api";
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../context/themecontext/ThemeContext';


function Home() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    const[trendigProductList,setTrendingProductList] = useState([])
    const[newArrivalsProductList,setNewArrivalsProductList] = useState([])
    useEffect(()=>{
        getAllProducts(8,0).then((data)=>setTrendingProductList(data.products))
        getAllProducts(8,9).then((data)=>setNewArrivalsProductList(data.products))
      },[])

    return ( 
        <main className={isDark?'home-page dark':'home-page'}>
            <ProductLayout layoutTitle="Trending Products">
                {
                    trendigProductList.map((el)=>
                    <CartItem 
                        id={el.id}
                        key={el.id}
                        image={el.thumbnail}
                        title={el.title}
                        category={el.category}
                        price={el.price}
                        discountPercentage={el.discountPercentage}
                    />)
                }
            </ProductLayout>

            <ProductLayout layoutTitle="New Arrival">
                {
                    newArrivalsProductList.map((el)=>
                    <CartItem 
                        id={el.id}
                        key={el.id}
                        image={el.thumbnail}
                        title={el.title}
                        category={el.category}
                        price={el.price}
                        discountPercentage={el.discountPercentage}
                    />)
                }
            </ProductLayout>
        </main>
     );
}

export default Home;