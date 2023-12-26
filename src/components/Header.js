import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/Category">Category</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;