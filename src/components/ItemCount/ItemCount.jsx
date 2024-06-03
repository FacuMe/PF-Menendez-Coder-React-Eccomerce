import { useState } from "react"

const ItemCount = ({ stock, addProduct }) => {

    const [ count, setCount ] = useState(1);

    const handleClickDecrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const handaleClickIncrement = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }

    const handleClickAddToCart = () => {
        addProduct(count);
    }

    return (
        <div className="d-flex justify-content-center align-items-center gap-3">
            <button onClick={handleClickDecrement}>-</button>
            <p className="m-0">{count}</p>
            <button onClick={handaleClickIncrement}>+</button>
            <button onClick={handleClickAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount