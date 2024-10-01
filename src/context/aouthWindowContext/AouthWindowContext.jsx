import { createContext, useState } from "react";

export const AuthWindowContext = createContext()

function AouthWindowContext({children}) {
    const [isWinOpen,setIsWinOpen] = useState(false)
    return ( 
        <AuthWindowContext.Provider value={{isWinOpen,setIsWinOpen}}>
            {children}
        </AuthWindowContext.Provider>
     );
}

export default AouthWindowContext;