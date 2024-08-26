import './CartItem.css'
import product from '../../assets/thumbnail.png'


function CartItem({id,title,category,price,discountPercentage}) {
    
    let newPrice = price-(price*(discountPercentage/100))
    newPrice = newPrice.toFixed(2)

    return ( 
        <div className='cart-item'>
            <div className='image-place'><img src={product} className='product-img'/></div>
           <div className='textures'>
                 <p className='category'>{category}</p>
                <p className='title'>{title}</p>
                 <div className='price-buy'>
                     <div className='prices'>
                         <p className="new-price">${newPrice}</p>
                         <p className="old-price"><del>${price}</del><b>{discountPercentage}%</b></p>
                     </div>
                     <button className='buy-cart'>Add To Cart</button>
                 </div>
           </div>
        </div>
     );
}

export default CartItem;