import Productos from "../../Productos.json";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const getProducts = (data) =>
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
            getProducts(Productos)
            .then((result) => setProducts(result))
            .catch((err) => console.log(err));
        }, []);

        return (
            <>
                    <div>
                        <div >
                            <h2>TESTEANDO</h2>
                        </div>
                            {products && products.map((articulos) =>
                            <ItemList key={articulos.id} items={articulos}/>)}
                    </div>
            </>
            
        );


}
