import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        <nav>
            <img src="../../img/logo.png" alt="logo" class="logo"></img>
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
