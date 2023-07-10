import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const  Navbar = () => {
    return (
        <nav className="navbar">
            <Link  to="/"><h1 className="logotipo">Salomon Shop</h1></Link >
            <ul className="menu">
                <li><Link className="menu_item" to="/productos">Productos</Link></li>
                <li><Link className="menu_item" to="/productos/phones">Phones</Link></li>
                <li><Link className="menu_item" to="/productos/fundas">Fundas</Link></li>
                <li><Link className="menu_item" to="/productos/cargadores">Cargadores</Link></li>
                <li><CartWidget/></li>
            </ul>
        </nav>
    )
}

export default Navbar; 