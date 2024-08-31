import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home/Home";
import Categories from "./components/pages/categories/Categories"
import {Routes,Route} from 'react-router-dom'
import Products from "./components/pages/products/Products";

function App() {
 

  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="products" element={<Products/>}/>
     </Routes>
     <Home/>
     <Footer/>
     
    </div>
  );
}

export default App;
