import { ThemeContext } from 'context';
import { useContext } from 'react';
import './ProductLayout.css'

function ProductLayout({children,layoutTitle}) {
    const {isDark,setIsDark} = useContext(ThemeContext)
    return ( 
        <div className={isDark?'product-layout dark':"product-layout"}>
            <h2>{layoutTitle}</h2>
            <div className='children'>
            {children}
            </div>
        </div>
     );
}

export default ProductLayout;