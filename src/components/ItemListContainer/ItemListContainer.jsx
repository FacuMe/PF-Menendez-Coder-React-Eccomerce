import './itemlistcontainer.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import getProducts from "../../data/data";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greetings }) => {

  const [ products, setProducts ] = useState([]);
  const { idCategory} = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        if(idCategory){
          const productsFilter = response.filter( (productRes) => productRes.category === idCategory);
          setProducts(productsFilter);
        } else {
          setProducts(response);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa de ItemListContainer");
      });
  }, [idCategory]);

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ greetings }</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
