import { useState } from "react"

const ItemCount = ({product}) => {

    const [ count, setCount ] = useState(1);

    const restar = () => {
        if(count > 1){
            setCount(count - 1);
        }
    }

    const sumar = () => {
        if(count < product.stock){
            setCount(count + 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(count);
    }

    return (
        <div className="d-flex justify-content-center align-items-center gap-3">
            <button onClick={restar}>-</button>
            <p className="m-0">{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount