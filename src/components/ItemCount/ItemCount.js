import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({stock, desaparecer}) => {
    const [count, setCount] = useState(1);

    function onAdd (){
        if (count < stock){
            setCount(count + 1);
        }
    }

    function onRemove (){
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <div className="btn-body">
            <input className="inpt" type="text" value={count}/>
            <button className="btnRemove" onClick={onRemove}> - </button>
            <button className="btnAdd" onClick={onAdd}> + </button>
            <button className="addCart" onClick={desaparecer}>Agregar al carro</button>
        </div>
    )

}
