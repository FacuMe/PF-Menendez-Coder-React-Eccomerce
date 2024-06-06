import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './navbar.css'

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  let quantity = totalQuantity();

  return (
    <Link to="/cart" className={ quantity >= 1 ? "d-flex mt-3 gap-2 pe-5 cart-counter cart-yellow" : "d-flex mt-3 gap-2 pe-5 cart-counter cart-grey"}>
      <FaCartShopping size="25"/>
      <p> { quantity >= 1 && quantity } </p>
    </Link>
  )
}

export default CartWidget
