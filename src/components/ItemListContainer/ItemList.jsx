import Item from './Item';

const ItemList = ({products}) => {
  return (
    <div className="row row-cols-2 row-cols-sm-4 justify-content-start align-items-center flex-wrap m-sm-5 ps-lg-5 pe-lg-5">
        {
          products.map( (product) => (
            <Item key={product.id} product={product}/>  
          ))
        } 
    </div>
  )
}

export default ItemList
