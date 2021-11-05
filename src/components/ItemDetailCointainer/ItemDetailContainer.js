import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Productos from "../../Productos.json";
import './ItemDetailContainer.css'
import { useParams } from "react-router";

export const ItemDetailContainer = () => {   

    const [itemDetail, setItemDetail] = useState([null]);

    const {itemId} = useParams ();

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
            .then((result) => { setItemDetail(result.find((details) => details.id === Number(itemId)));
            })
            .catch((err) => console.log(err));
        }, [itemId]);

        return (
            <>
                <h2 className="title-detail">DETALLE DE PRODUCTO</h2>
                <div>
                    {itemDetail && 
                        <ItemDetail
                            id={itemDetail.id}
                            title={itemDetail.title}
                            price={itemDetail.price}
                            stock={itemDetail.stock}
                            description={itemDetail.description}
                            thumbnailUrl={itemDetail.thumbnailUrl}
                        />
                    }
                </div>
            </>

        );
}


export default ItemDetailContainer;