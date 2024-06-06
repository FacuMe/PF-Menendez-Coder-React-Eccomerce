import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import db from "../../db/db";
import './itemlistcontainer.css';


const ItemListContainer = () => {

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const { idCategory, filter } = useParams();

  // const applyFilter = (products, filter) => {
  //   return products.filter((product) => product[filter] === true);
  // };

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((productsDb)=> {
        const data = productsDb.docs.map( (product) => {
          return {id: product.id, ...product.data()}
        });
        setProducts(data);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", idCategory))
    getDocs(q)
      .then((productsDb)=> {
        const data = productsDb.docs.map( (product) => {
          return {id: product.id, ...product.data()}
        });
        setProducts(data);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);

    // getProducts()
    //   .then((response) => {
    //     let filteredProducts = response;
        
    //     if(filter){          
    //       filteredProducts = applyFilter(response, filter);
    //     }
    //     else if(idCategory){
    //       filteredProducts = response.filter( (productRes) => productRes.category === idCategory);
    //     } 
        
    //     setProducts(filteredProducts);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    if(idCategory){
      getProductsByCategory()
    }
    else{
      getProducts();
    }
  }, [idCategory, filter]);

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ !idCategory && !filter && "Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros"}</h1>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ idCategory && `${idCategory}` }</h1>
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{ filter && `${filter}` }</h1>
      {
        loading ? <div>Cargando...</div> : <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer
