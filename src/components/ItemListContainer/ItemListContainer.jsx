import './itemlistcontainer.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import getProducts from "../../data/data";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greetings }) => {

  const [ products, setProducts ] = useState([]);
  const { idCategory, filter } = useParams();

  const applyFilter = (products, filter) => {
    return products.filter((product) => product[filter] === true);
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        let filteredProducts = response;
        
        if(filter){          
          filteredProducts = applyFilter(response, filter);
        }
        else if(idCategory){
          filteredProducts = response.filter( (productRes) => productRes.category === idCategory);
        } 
        
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa de ItemListContainer");
      });
  }, [idCategory, filter]);

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ greetings }</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
