import Productos from "../../Productos.json";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.css"

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    const { id } = useParams();
    console.log(id)

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
            .then((result) => setProducts(result.filter((products) => products.category === id)))
            .catch((err) => console.log(err));
        }, [id]);

        return (
            <>
                <div className="title-products">
                    <h2>PRODUCTOS</h2>
                </div>
                <div className="container">
                        {products && products.map((articulos) =>
                        <ItemList key={articulos.id} items={articulos} />)}
                </div>
            </>
            
        );


}
