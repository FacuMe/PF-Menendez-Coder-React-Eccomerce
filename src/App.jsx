import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer greetings="Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros"/>} />
          <Route path="/category/:idCategory" element= {<ItemListContainer greetings="Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros"/>} />
          <Route path="/:filter" element= {<ItemListContainer greetings="Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros"/>} />
          <Route path="/detail/:idProduct" element= {<ItemDetailContainer />} /> 
          <Route path="/cart" element= {<Cart />} /> 
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
