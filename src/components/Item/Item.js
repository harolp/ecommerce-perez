import { ItemCount } from "../ItemCount/ItemCount";
import "./Item.css"
import { Link } from "react-router-dom";

export const Item = ({id, title, stock, price, thumbnailUrl}) => {
    
    return (
        <div className="card">
            <img className="imgCard" src={thumbnailUrl}/>
            <div className="card-body">
                <h5>{title}</h5>
                <span>Precio: {price}</span>
                <ItemCount stock={stock} initial="1"/>
            </div>
            <Link to={'/item/${id}'}>
                <button>Ver más</button>
            </Link>
        </div>
    ) 
}


export default Item;