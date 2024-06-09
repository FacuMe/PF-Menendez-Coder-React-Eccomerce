import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addToCart = (newProduct) => {
        const condition = isInCart(newProduct.id);
        if (condition){
            const modifiedProducts = carrito.map((cartProduct) => {
                if(cartProduct.id === newProduct.id){
                    return { ...cartProduct, quantity: cartProduct.quantity + newProduct.quantity}
                }
                else{
                    return cartProduct;
                }
            });
            setCarrito(modifiedProducts);
        }
        else{
            setCarrito([...carrito, newProduct]);
        }
    }

    const totalQuantity = () => {
        const totalProducts = carrito.reduce( (total, product) => total + product.quantity, 0);
        return totalProducts;
    }

    const totalCartValue = () => {
        const totalPrice = carrito.reduce((total, cartProduct) => total + (cartProduct.price * cartProduct.quantity), 0);
        return totalPrice;
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isInCart = (productId) => {
        const condition = carrito.some((cartProduct) => cartProduct.id === productId );
        return condition;
    }

    const deleteProductById = (productId) => {
        const filteredProducts = carrito.filter((cartProduct) => cartProduct.id !== productId);
        setCarrito(filteredProducts);
    }

    return(
        <CartContext.Provider value={{carrito, addToCart, totalQuantity, clearCart, deleteProductById, totalCartValue}}>
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext };