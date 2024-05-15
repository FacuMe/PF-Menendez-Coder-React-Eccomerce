import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ps-5 mt-2">
          <img src="src/assets/logo-img-3-edit-3.png" alt="Logo" width="60" height="44" className="d-inline-block align-text-center" />
          Booklify
        </Link>
        <div className="collapse navbar-collapse ps-5" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Destacados</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Novedades</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/category/literatura" className="dropdown-item">Literatura</Link></li>
                <li><Link to="/category/fantasia" className="dropdown-item">Fantasía</Link></li>
                <li><Link to="/category/ficcion" className="dropdown-item">Ficción</Link></li>
                <li><Link to="/category/clasicos" className="dropdown-item">Clásicos</Link></li>
                <li><Link to="/category/aventura" className="dropdown-item">Aventura</Link></li>
                <li><Link to="/category/romance" className="dropdown-item">Romance</Link></li>
                <li><Link to="/category/misterio" className="dropdown-item">Misterio</Link></li>
                <li><Link to="/category/terror" className="dropdown-item">Terror</Link></li>
                <li><Link to="/category/juvenil" className="dropdown-item">Juvenil</Link></li>
                <li><Link to="/category/historico" className="dropdown-item">Histórico</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
