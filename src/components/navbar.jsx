
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li>
                    <Link to="/about" className="nav-link">About</Link>
                </li>

                <li>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
