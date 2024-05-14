import './itemlistcontainer.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import getProducts from "../../data/data";


const ItemListContainer = ({ greetings }) => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa");
      });
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ greetings }</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
