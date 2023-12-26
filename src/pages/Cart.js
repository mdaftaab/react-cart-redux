import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice.js";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handelRemove = (id) =>{
        dispatch(removeFromCart(id));
    }

    // Check if cartItems is not defined or is empty
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="main">
                <h2>Cart Page</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="main">
            <h2>Cart Page</h2>
            <div className="cartWapper">
            {cartItems.map((item) => (
                <div className="cart-div" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <h4>Price: {item.price}</h4>
                    <p>{item.description}</p>
                    <button className="btn" onClick={()=>handelRemove(item.id)}>Remove</button>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Cart;
