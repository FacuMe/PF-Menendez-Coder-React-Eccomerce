import ItemCount from "../ItemCount/ItemCount"
import './itemdetail.css';

const ItemDetail = ({product}) => {
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
        <ItemCount product={product}/>
      </div>
    </div>
  )
}

export default ItemDetail