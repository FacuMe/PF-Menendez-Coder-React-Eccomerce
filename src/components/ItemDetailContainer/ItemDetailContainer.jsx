import { useEffect, useState } from "react"
import getProducts from "../../data/data"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [ product, setProduct] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        const productFind = response.find( (productRes) => productRes.id === idProduct );
        setProduct(productFind);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalizó la promesa de ItemDetailContainer");
      });
  }, []);

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer