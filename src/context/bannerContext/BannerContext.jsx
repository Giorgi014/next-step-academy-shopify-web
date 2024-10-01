import { createContext, useState } from "react";

export const BannerContext = createContext()

function BannerContextComponent({children}) {
    const [isBannerOpen,setIsBannerOpen] = useState(true)
    const obj = {
        isBannerOpen,
        setIsBannerOpen
    }
    return ( 
        <BannerContext.Provider value={obj}>
            {children}
        </BannerContext.Provider>
     );
}

export default BannerContextComponent;