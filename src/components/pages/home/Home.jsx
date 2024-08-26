import CartItem from '../../cartitem/CartItem';
import ProductLayout from '../../layouts/productslayout/ProductLayout';
import './Home.css'

const productList = [
    {
        id:1,
        title:"Essence Mascara Lash Princes",
        category:"beauty",
        price: 9.99,
        discountPercentage:7.17
    },
    {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
         category: "beauty",
         price: 19.99,
         discountPercentage: 5.5
    },
    {
        id: 3,
        title: "Powder Canister",
        category: "beauty",
        price: 14.99,
        discountPercentage: 18.14
    },
    {
         id: 4,
         title: "Red Lipstick",
         category: "beauty",
         price: 12.99,
         discountPercentage: 19.03
    },
    {
        id: 5,
        title: "Red Nail Polish",
        category: "beauty",
        price: 8.99,
        discountPercentage: 2.46
    },
    {
         id: 6,
         title: "Calvin Klein CK One",
         category: "fragrances",
         price: 49.99,
         discountPercentage: 0.32
    },
    {
         id: 7,
         title: "Chanel Coco Noir Eau De",
         category: "fragrances",
         price: 129.99,
         discountPercentage: 18.64
    },
    {
        id: 8,
        title: "Dior J'adore",
        category: "fragrances",
        price: 89.99,
        discountPercentage: 17.44
    }
]



function Home() {
    return ( 
        <main className='home-page'>
            <ProductLayout layoutTitle="Trending Products">
                {
                    productList.map((el)=>
                    <CartItem 
                        id={el.id}
                        title={el.title}
                        category={el.category}
                        price={el.price}
                        discountPercentage={el.discountPercentage}
                    />)
                }
            </ProductLayout>
        </main>
     );
}

export default Home;