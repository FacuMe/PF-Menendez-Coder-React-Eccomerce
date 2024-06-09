import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="col-6 col-sm-3 d-flex justify-content-center products__block__item">
        <div className="products__block__item__box">
            <div className="products__block__item__box__image-container">
                <img src={product.image} className="products__block__item__box__image-container__img" alt="..."/>       
            </div>
            <div>
              <p className="products__block__item__box__name">{product.name}</p>
              <p className="products__block__item__box__title">{product.author}</p>
              <p className="products__block__item__box__price">$ {product.price}</p>
              <div>
                <Link to={"/detail/" + product.id}>
                    <button type="button" className="btn btn-dark products__block__item__box__btn">Detalle</button>       
                </Link>  
              </div>           
            </div>
        </div>
    </div>
  )
}

export default Item