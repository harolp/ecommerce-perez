import { ItemCount } from "../ItemCount/ItemCount"

export const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer__greeting">
            <h3>{props.prueba}</h3>
            <h5>{props.alo}</h5>
            <ItemCount stock="10" initial="1" />
        </div>
    )
}
