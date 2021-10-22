import Item from "../../components/Item/Item";

export const ItemList = ({items}) => {

    return (
        <>
            <Item 
            id={items.id}
            title={items.title} 
            stock={items.stock}
            price={items.price}
            thumbnailUrl={items.thumbnailUrl}
            />
        </>
    );
}


export default ItemList;