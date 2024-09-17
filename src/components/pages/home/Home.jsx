import CartItem from '../../cartitem/CartItem';
import ProductLayout from '../../layouts/productslayout/ProductLayout';
import './Home.css'
import { getAllProducts } from "../../helper/api";
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../context/themecontext/ThemeContext';
import { RingLoader } from "react-spinners";

function Home() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    const[trendigProductList,setTrendingProductList] = useState([])
    const[newArrivalsProductList,setNewArrivalsProductList] = useState([])
    const[loadingMoment,setLoadingMoment] = useState(false)
    useEffect(()=>{
        setLoadingMoment(true)
        getAllProducts(8,0).then((data)=>setTrendingProductList(data.products))
        .finally(()=>setLoadingMoment(false))
        getAllProducts(8,9).then((data)=>setNewArrivalsProductList(data.products))
      },[])

    return ( 
        <main className={isDark?'home-page dark':'home-page'}>
            <ProductLayout layoutTitle="Trending Products">
                {
                    loadingMoment?<RingLoader size={100} color="#d8d8d8" cssOverride={{left:"50%",transform:"translateX(-50%)",position:"fixed"}}/>
                    :trendigProductList.map((el)=>
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