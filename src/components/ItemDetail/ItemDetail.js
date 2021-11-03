import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({title, stock, price, thumbnailUrl, description}) => {

    return (
        <div>
            <img src={thumbnailUrl} alt="imgProducto"/>
            <h1 className="title-product">{title}</h1>
            <p className="description-product">{description}</p>
            <span className="stock-product">Stock: {stock}</span>
            <span className="price-product">$ {price}</span>
            <ItemCount stock={stock} initial="1"/>
        </div>

    );
}


export default ItemDetail;