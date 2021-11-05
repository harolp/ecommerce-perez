import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.css'

export const ItemDetail = ({id, title, stock, price, thumbnailUrl, description}) => {

    return (
        <div className="card-detail" key={id}>
            <img src={thumbnailUrl} alt="imgProducto"/>
            <div className="detail-body">
                <h3 className="title-product">{title}</h3>
                <p className="description-product">{description}</p>
                <span className="stock-product">Stock: {stock}</span>
                <span className="price-product">$ {price}</span>
                <ItemCount stock={stock} initial="1"/>
            </div>
        </div>

    );
}


export default ItemDetail;