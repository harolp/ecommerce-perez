import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        <nav>
            <div>
                <h1 className='title'>GAMER SHOP</h1>
            </div>
            <ul>
                <a href="https://www.coderhouse.cl/">Inicio</a>
                <a href="https://www.coderhouse.cl/">Componentes</a>
                <a href="https://www.coderhouse.cl/">PC Gamer</a>
                <a href="https://www.coderhouse.cl/">Contactanos</a>
                <CartWidget/>
            </ul>
        </nav>
    )
}
