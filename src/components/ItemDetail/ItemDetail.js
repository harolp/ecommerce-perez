import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useState } from "react";

export const ItemDetail = ({id, title, stock, price, thumbnailUrl, description}) => {

    const [flag, setFlag] = useState(true);

    const desaparecer = () => {
        setFlag(false);
    };

    
    return (
        <div className="card-detail" key={id}>
            <img src={thumbnailUrl} alt="imgProducto"/>
            <div className="detail-body">
                <h3 className="title-product">{title}</h3>
                <p className="description-product">{description}</p>
                <span className="stock-product">Stock: {stock}</span>
                <span className="price-product">$ {price}</span>
                {flag ? (<ItemCount stock={stock} desaparecer={desaparecer}/>) : (
                    <Link to="/cart">
                        <button>Ver carrito</button>
                    </Link>)}
            </div>
        </div>

    );
}


export default ItemDetail;