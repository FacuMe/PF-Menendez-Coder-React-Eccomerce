import { useState } from "react"
import './itemcount.css';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

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
        <div className="d-flex justify-content-start align-items-center gap-3 mt-3">
            <FiMinusCircle onClick={handleClickDecrement} className="count-btn"/>
            <p className="m-0 count">{count}</p>
            <FiPlusCircle onClick={handaleClickIncrement} className="count-btn"/>
            <button onClick={handleClickAddToCart} className="btn btn-dark btn-add-to-cart">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount