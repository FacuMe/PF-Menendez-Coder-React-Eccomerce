import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addToCart = (nuevoProducto) => {
        setCarrito([...carrito, nuevoProducto]);
    }

    const totalQuantity = () => {
        const totalProducts = carrito.reduce( (total, product) => total + product.quantity, 0);
        return totalProducts;
    }

    const clearCart = () => {
        setCarrito([]);
    }

    console.log(carrito)

    return(
        <CartContext.Provider value={{carrito, addToCart, totalQuantity, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };