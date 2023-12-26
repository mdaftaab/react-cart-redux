import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <>
            <nav>
                <div className="logo">
                    <img src="https://uomo-html.flexkitux.com/images/logo.png" alt="logo" />
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Category">Category</Link>
                    </li>
                    <li>
                        <Link to="/cart"><IoMdCart /><span>{products.length}</span></Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Header;