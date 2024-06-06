import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';
import db from "../../db/db";
import { toast } from 'react-toastify';
import Banner from "../Banner/Banner.jsx";
import './itemlistcontainer.css';


const ItemListContainer = () => {

  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const { idCategory, filter } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef)
      .then((productsDb)=> {
        const data = productsDb.docs.map( (product) => {
          return {id: product.id, ...product.data()}
        });
        setProducts(data);
        if (data.length === 0) {
          setError("No se encontraron productos disponibles.");
          toast.error(`Error en la carga inicial de productos`);
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.log(error.message);
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
        if (data.length === 0) {
          setError(`No se encontraron productos para la categoría buscada.`);
          toast.error(`Error en la carga de productos por categoría`);
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getProductsByFilters = (filter) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where(filter, "==", true))
    getDocs(q)
      .then((productsDb)=> {
        const data = productsDb.docs.map( (product) => {
          return {id: product.id, ...product.data()}
        });
        setProducts(data);
        if (data.length === 0) {
          setError(`No se encontraron productos con el filtro buscado.`);
          toast.error(`Error en la carga de productos por filtro`);
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const translateFilter = (filter) => {
    switch (filter) {
      case "newArrivals":
        return "novedades";
      case "featured":
        return "destacados";
      case "offers":
        return "ofertas";
      default:
        return "";
    }
  };

  const getHeaderMessage = () => {
    if (filter) {
      return translateFilter(filter);
    } else if (idCategory) {
      return idCategory;
    } else {
      return "Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros";
    }
  }

  useEffect(() => {
    setLoading(true);

    if(filter){
      getProductsByFilters(filter)
    }
    else if(idCategory){
      getProductsByCategory()
    }
    else{
      getProducts();
    }
  }, [idCategory, filter]);

  return (
    <div>
      <Banner />
      <h1 className="d-flex justify-content-center align-items-center pt-4 encabezado">{getHeaderMessage()}</h1>
      {
        loading ? <div>Cargando...</div> : error ? <div className="error-message">{error}</div> : <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer
