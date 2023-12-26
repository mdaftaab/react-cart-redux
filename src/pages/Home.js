import { useEffect, useState } from "react";
import { addToCart } from "../redux/CartSlice.js";
import { useDispatch } from "react-redux";

const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const handelAdd = (product) =>{
        dispatch(addToCart(product));
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    }, [])


    return (
        <div className="main">
            <h2>Products List</h2>
            <div className="products-list">
            {
                products.map(product => (
                    <div className="product-div" key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <h4>Price : {product.price}</h4>
                        <p>{product.description}</p>
                        <button className="btn" onClick={()=>handelAdd(product)}>Add To Cart</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Home;