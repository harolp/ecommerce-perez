import { ItemCount } from "../ItemCount/ItemCount";

export const Item = ({id, title, stock, price, thumbnailUrl}) => {
    
    return (
        <div className="contenedorCard">
            <div className="imgCard">
                <img src={thumbnailUrl}/>
            </div>
            <h1>{title}</h1>
            <h2>Precio: {price}</h2>
            <ItemCount stock={stock} initial="1"/>
        </div>
    )
}


export default Item;