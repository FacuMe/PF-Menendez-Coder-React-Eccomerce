import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/db.js";
import { toast } from 'react-toastify';
import { HashLoader} from 'react-spinners';

const ItemDetailContainer = () => {

  const [ product, setProduct] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  const { idProduct } = useParams();

  const getProduct = () => {
    const productRef = doc(db, "products", idProduct);
    getDoc(productRef)
      .then((productDb) => {
        if (productDb.exists()) {
          const data = { id: productDb.id, ...productDb.data()};
          setProduct(data);
          setError(null);
        } else {
          setError("Producto no encontrado");
          toast.error(`Error en la carga del producto`);
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    getProduct();
  }, [idProduct]);

  return (
    <div>
      {
        loading ? 
          <div className="loading gap-4">
            <HashLoader color="#f6cd6f" />
            <p className='ps-3'>Cargando...</p>
          </div> : 
        error ? <div className="error-message">{error}</div> : <ItemDetail product={product}/>
      }
    </div>
  )
}

export default ItemDetailContainer
