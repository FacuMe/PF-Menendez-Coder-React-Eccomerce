import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greetings="Bienvenido a Booklify: Tu Destino para Descubrir y Comprar los Mejores Libros"/>
    </div>
  )
}

export default App
