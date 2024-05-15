import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
  return (
    <div>
      <img src={product.image} alt="..."/>
      <p>{product.name}</p>
      <p>Autor: {product.author}</p>
      <p>Sinopsis: {product.description}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <p>${product.price}</p>
      <ItemCount product={product}/>
    </div>
  )
}

export default ItemDetail