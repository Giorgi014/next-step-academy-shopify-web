import "./Banner.css"
import BannerImg from "assets/banner.jpg"
import { BannerContext } from "context/bannerContext/BannerContext";
import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";

function Banner() {
    const {isBannerOpen,setIsBannerOpen} = useContext(BannerContext)
    return ( 
        <div className="banner">
            <div className="container">
                <button className="close-btn" onClick={()=>setIsBannerOpen(false)}><IoCloseSharp /></button>
                <img src={BannerImg} alt="" className="banner-img"/>
            </div>
        </div>
     );
}

export default Banner;