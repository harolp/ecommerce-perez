import { useState } from "react";
import './ItemCount.css'

export const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    function onAdd (){
        if (count < props.stock){
            setCount(count+1)
        }
    }

    function onRemove (){
        if (count >= 1){
            setCount(count-1)
        }
    }

    return (
        <div>
            <h1> Contador minimalista :v = {count}</h1>
            <input className="inpt" type="text" value={count}/>
            <button className="btnRemove" onClick={onRemove}> - </button>
            <button className="btnAdd" onClick={onAdd}> + </button>
        </div>
    )

}
