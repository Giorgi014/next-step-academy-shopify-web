import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home/Home";
import Categories from "./components/pages/categories/Categories"
import {Routes,Route} from 'react-router-dom'
import Products from "./components/pages/products/Products";
import { ThemeContext } from "./context/themecontext/ThemeContext";
import { useContext } from "react";
import NotFound from "./components/pages/notfound/NotFound";
import Product from "./components/pages/product/Product";


function App() {
  const {isDark,setIsDark} = useContext(ThemeContext)
  return (
    <div className={isDark?"App dark":"App"}>
        <Navbar/>
        <Routes>
         <Route index element={<Home/>}/>
         <Route path="categories" element={<Categories/>}/>
         <Route path="products" element={<Products/>}/>
         <Route path="product/:productID" element={<Product/>}/>
         <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;
