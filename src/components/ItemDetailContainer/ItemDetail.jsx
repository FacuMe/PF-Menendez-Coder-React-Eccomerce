import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './itemdetail.css';

const ItemDetail = ({product}) => {

  const { addToCart } = useContext(CartContext);
  const [hideCount, setHideCount] = useState(false);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count};
    addToCart(productCart);
    setHideCount(true);
  }

  return (
    <div className="d-flex justify-content-center align-items-center m-5 detail-container gap-5">
      <div>
        <img src={product.image} className="img-detail" alt="..."/>
      </div>
      <div>
        <p>{product.name}</p>
        <p>Autor: {product.author}</p>
        <p>Sinopsis: {product.description}</p>
        <p>Categoría: {product.category}</p>
        <p>Stock: {product.stock}</p>
        <p>${product.price}</p>
        {hideCount ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct}/>
        )}
      </div>
    </div>
  );
};

export default ItemDetail