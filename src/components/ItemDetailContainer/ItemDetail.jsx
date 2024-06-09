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
    <div className="row justify-content-center pt-5 pb-5">
      <div className="col-10 col-sm-4 order-sm-1 d-flex justify-content-center align-items-center">
          <div className="col-10 product-img-wrapper product-img-wrapper--yellow-bg">
              <img src={product.image} className="img-fluid product-img" alt="..."/>
          </div>
      </div>
      <div className="col-10 col-sm-4 order-sm-2 d-flex flex-column product-data">
        <h3 className="product-title">{product.name}</h3>
        <div className="mt-3 product-description"> 
          <h5 className="pb-5">{product.author}</h5>
          <h6 className="pb-3">Sinopsis: {product.description}</h6>
          <h6 className="pb-2">Categoría: {product.category}</h6>
          <h6 className="pb-4">Stock: {product.stock}</h6>
        </div>
        <h5 className="product-price pb-2">${product.price}</h5>
        {hideCount ? (
          <Link to="/cart">
            <button className="btn btn-dark btn-go-to-cart">Ir al carrito</button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} addProduct={addProduct}/>
        )}
      </div>
    </div>    
  );
};

export default ItemDetail
