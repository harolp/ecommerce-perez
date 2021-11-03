import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Productos from "../../Productos.json";

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);

    const getItemDetail = (data) =>
        new Promise((resolve,reject) => {
            setTimeout(() => {
                if(data) {
                    resolve(data);
                } else {
                    reject("N/A");
                }
            }, 2000);
        });

        useEffect(() => {
            getItemDetail(Productos)
            .then((result) => setItemDetail(result))
            .catch((err) => console.log(err));
        }, []);


        return (
            <>
                    <div>
                        <div >
                            <h2>PROBANDO DETALLE</h2>
                        </div>
                            {itemDetail && itemDetail.map((descripcion) =>
                            <ItemDetail items={descripcion} />)}
                    </div>
            </>

        );
}


export default ItemDetailContainer;