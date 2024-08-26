import './ProductLayout.css'

function ProductLayout({children,layoutTitle}) {
    return ( 
        <div className='product-layout'>
            <h2>{layoutTitle}</h2>
            <div className='children'>
            {children}
            </div>
        </div>
     );
}

export default ProductLayout;