import {Navbar,Home,Product,Products,Categories,Footer,NotFound} from "./components"
import {Routes,Route} from 'react-router-dom'
import { ThemeContext } from "./context/themecontext/ThemeContext";
import { useContext } from "react";


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
