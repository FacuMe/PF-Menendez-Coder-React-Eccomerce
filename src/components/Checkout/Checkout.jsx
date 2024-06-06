import { useState } from "react";
import Form from "./Form";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify"; 


const Checkout = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    emailCheck: ""
  });
  const [idOrder, setIdOrder] = useState(null);
  const { carrito, totalCartValue, clearCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()
    const { emailCheck, ...customerData } = formData;
    const order = {
      customer: {...customerData},
      products: [...carrito],
      date: Timestamp.fromDate(new Date()),
      total: totalCartValue()
    }
    try {
      const response = await validateForm(formData);
      if(response.status === "success"){
        generateOrder(order);
      } else{
        toast.warning(response.message)
      } 
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updateStock = () => {
    carrito.map((cartProduct) => {
      let quantity = cartProduct.quantity;
      delete cartProduct.quantity
      const refProduct = doc(db, "products", cartProduct.id);
      setDoc(refProduct, {...cartProduct, stock: cartProduct.stock - quantity})
        .then(() => console.log("Stock actualizado correctamente"))
        .catch((error) => toast.error(error.message))
    })
  }

  const generateOrder = (order) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, order)
      .then((response) => setIdOrder(response.id))
      .catch((error) => toast.error(error.message))
      .finally(() => {
        updateStock();
        clearCart();
      })
  }

  return (
    <div>
      {
        idOrder ? (
          <div>
            <h2>¡Orden generada con éxito! 😁</h2>
            <p>El código de su orden es: {idOrder}</p>
          </div>
        ) : (
          <Form formData={formData} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
        )
      }
    </div>
  )
}

export default Checkout