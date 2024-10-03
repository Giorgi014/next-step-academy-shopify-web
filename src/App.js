import {Navbar,Home,Product,Products,Categories,Footer,NotFound,Category} from "./components"
import {Routes,Route} from 'react-router-dom'
import { useContext } from "react";
import Banner from "components/banner/Banner";
import LogIn from "components/logIn/LogIn";
import { AuthWindowContext,BannerContext,ThemeContext } from "context";

function App() {
  const {isDark,setIsDark} = useContext(ThemeContext)
  const {isBannerOpen} = useContext(BannerContext)
  const {isWinOpen,setIsWinOpen} = useContext(AuthWindowContext)
  return (
    <div className={isDark?"App dark":"App"}>
        {isBannerOpen && <Banner />}
        <Navbar/>
        {isWinOpen && <LogIn/>}
        <Routes>
         <Route index element={<Home/>}/>
         <Route path="categories" element={<Categories/>}/>
         <Route path="products" element={<Products/>}/>
         <Route path="product/:productID" element={<Product/>}/>
         <Route path="/category/:categoryID" element={<Category/>}/>
         {/* <Route path="login" element={<LogIn/>}/> */}
         <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
     
    </div>
  );
}

export default App;
