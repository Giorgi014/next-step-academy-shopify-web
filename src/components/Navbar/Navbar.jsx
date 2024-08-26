import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import './Navbar.css'


function Navbar() {
    return ( 
        <nav className="nav-bar">
            <div className="logo">
                <h1>SHOPIFY</h1>
            </div>
            <div className="search-place">
                <div className="shearch-bar">
                    <input type="text" placeholder="Search for a product..."/>
                    <button><IoSearchOutline /></button>
                </div>
            </div>
            <ul className="nav-right-side">
                <li>Products</li>
                <li>Categories</li>
                <li className="icon-and-text"><FaUser className="secondary-color-b" /><span className="secondary-color">Login</span></li>
                <li className="big-size secondary-color"><AiOutlineShoppingCart /><div className="cart-count">0</div></li>
                <li className="big-size"><LuMoon /></li>
            </ul>
        </nav>
     );
}

export default Navbar;