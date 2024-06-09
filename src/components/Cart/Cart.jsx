import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {

  const { carrito, clearCart, deleteProductById, totalCartValue } = useContext(CartContext); 

  if(carrito.length === 0){
    return(
      <div className="cart-empty">
        <h2>El carrito esta vacío 😿</h2>
        <Link to="/">
          <button className="btn btn-dark btn-cart">Ver productos</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column cart">
      <h4 className="align-self-center pt-4 pb-4">Carrito de compras</h4>
      {
        carrito.map( (cartProduct) => (
          <div key={cartProduct.id} className="d-flex col-8 offset-2 ps-4 pb-3 gap-5 align-items-center">
            <img src={cartProduct.image} width={100} height={130} alt="..."/>
            <p className="col-3">{cartProduct.name}</p>
            <p className="col-1">x{cartProduct.quantity}</p>
            <p className="col-1">Precio: ${cartProduct.price}</p>
            <p className="col-2">Subtotal: ${cartProduct.price * cartProduct.quantity}</p>
            <button onClick={() => deleteProductById(cartProduct.id)} className="btn btn-dark btn-cart delete-from-cart-btn">Eliminar</button>
          </div>
        ))
      }
      <div className="offset-2 col-8 ps-4 pt-4 pb-5 mb-3 pe-1">
        <h2 className="mb-4">Total: ${totalCartValue()}</h2>
        <div className="d-flex justify-content-between">
          <Link to="/checkout">
            <button className="btn btn-dark btn-cart">Finalizar compra</button>
          </Link>
          <button onClick={clearCart} className="btn btn-light ms-3">Vaciar carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Cart