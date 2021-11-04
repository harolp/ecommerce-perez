import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <nav className="navBar">
            <Link to={'/'}><img className="imgLogo" src="../../img/logo.png" alt="logo"/></Link>
            <ul>
                <a href="https://www.coderhouse.cl/">Inicio</a>
                <a href="https://www.coderhouse.cl/">Conjuntos</a>
                <a href="https://www.coderhouse.cl/">Vestidos</a>
                <a href="https://www.coderhouse.cl/">Contactanos</a>
                <CartWidget/>
            </ul>
        </nav>
    )
}
