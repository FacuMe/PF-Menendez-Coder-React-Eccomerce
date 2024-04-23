import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <div className="d-flex mt-3 gap-2 pe-5">
      <FaCartShopping color="#f5961d" size="25"/>
      <p style={{ color: "#f5961d", fontSize: "17px", fontWeight: "bold"}}>0</p>
    </div>
  )
}

export default CartWidget
