
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
    </div>
  )
}

export default ItemDetail