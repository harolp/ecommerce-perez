import { useState } from "react";
import './ItemCount.css'

export const ItemCount = (props) => {
    const [count, setCount] = useState(parseInt(props.initial));

    function onAdd (){
        if (count < props.stock){
            setCount(count + 1);
        }
    }

    function onRemove (){
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <div>
            <input className="inpt" type="text" value={count}/>
            <button className="btnRemove" onClick={onRemove}> - </button>
            <button className="btnAdd" onClick={onAdd}> + </button>
            <button className="addCart">Agregar al carro</button>
        </div>
    )

}
