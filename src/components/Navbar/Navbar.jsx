import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import {NavLink,Link} from "react-router-dom"
import { ThemeContext } from "../../context/themecontext/ThemeContext";
import './Navbar.css'
import { useContext} from "react";

function Navbar() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    return ( 
        <nav className={isDark?"nav-bar dark":"nav-bar"}>
            <div className="logo">
                <h1><Link to={"/"}>SHOPIFY</Link></h1>
            </div>
            <div className="search-place">
                <div className="shearch-bar">
                    <input type="text" placeholder="Search for a product..."/>
                    <button><IoSearchOutline /></button>
                </div>
            </div>
            <ul className="nav-right-side">
                <li><NavLink to={"products"}>Products</NavLink></li>
                <li><NavLink to={"categories"}>Categories</NavLink></li>
                <li className="icon-and-text"><FaUser className="secondary-color-b" /><span className="secondary-color">Login</span></li>
                <li className="big-size secondary-color"><AiOutlineShoppingCart /><div className="cart-count">0</div></li>
                <button className="big-size theme-btn" onClick={()=>setIsDark(!isDark)}>{isDark?<FiSun />:<LuMoon />}</button>
            </ul>
        </nav>
     );
}

export default Navbar;