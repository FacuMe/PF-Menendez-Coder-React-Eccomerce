import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { carrito, clearCart } = useContext(CartContext); 

  return (
    <div className="d-flex flex-column">
      <h4 className="align-self-center pt-4 pb-4">Carrito de compras</h4>
      {
        carrito.map( (cartProduct) => (
          <div className="d-flex col-10 offset-2 ps-4 pb-3 gap-5 align-items-center">
            <img src={cartProduct.image} width={100} height={130} alt="..."/>
            <p className="col-3">{cartProduct.name}</p>
            <p className="col-1">x{cartProduct.quantity}</p>
            <p className="col-1">Precio: ${cartProduct.price}</p>
            <p className="col-2">Subtotal: ${cartProduct.price * cartProduct.quantity}</p>
          </div>
        ))
      }
      <div className="offset-2 ps-4 pt-5 pb-5 mb-3">
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart