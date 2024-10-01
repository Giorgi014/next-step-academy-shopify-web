import { FaUnlock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./LogIn.css"
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "context/themecontext/ThemeContext";
import { AuthWindowContext } from "context/aouthWindowContext/AouthWindowContext";

function LogIn() {
    const {isDark,setIsDark} = useContext(ThemeContext)
    const {isWinOpen,setIsWinOpen} = useContext(AuthWindowContext)
    return ( 
        <div className={isDark?"login dark":"login"}>
            <div className="container">
            <button className="close-btn" onClick={()=>setIsWinOpen(false)}><IoCloseSharp /></button>
                <p className="header"><FaUnlock fontSize={18}/>Login<FaUnlock fontSize={18}/></p>
                <div className="input">
                    <FaUser className="icon"/>
                    <input type="text" placeholder="Your username here...(atuny0)"/>
                </div>
                <div className="input">
                    <RiLockPasswordFill className="icon"/>
                    <input type="text" placeholder="Your password here...(9uQFF1Lh)"/>
                </div>
                <button className="login-btn">Submit</button>
                <p>Register</p>
            </div>
        </div>
     );
}

export default LogIn;