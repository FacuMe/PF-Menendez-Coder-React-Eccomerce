import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="d-flex mt-3 gap-2 pe-5">
      <FaCartShopping color="#f5961d" size="25"/>
      <p style={{ color: "#f5961d", fontSize: "17px", fontWeight: "bold"}}> { totalQuantity() } </p>
    </Link>
  )
}

export default CartWidget
