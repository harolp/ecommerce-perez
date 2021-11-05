import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <nav className="navBar">
            <Link to={'/'}><img className="imgLogo" src="../../img/logo.png" alt="logo"/></Link>
            <ul>
                <li><Link className="nav-style" to="/">Inicio</Link></li>
                <li><Link className="nav-style" to="/category/rojo">Conjuntos</Link></li>
                <li><Link className="nav-style" to="/category/azul">Vestidos</Link></li>
                <li><Link className="nav-style" to="/category/amarillo">Contactanos</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}
