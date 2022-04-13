import {useContext} from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { CartContexto } from '../../context/CartContext';
import '../styles/NavBar.css'

function NavBar({ textoDeLogo }) {

  const {carrito} = useContext(CartContexto);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" id='navTitle' to={"/"}>
          {textoDeLogo}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/suminagashi"}>
                Suminagashi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/otros"}>
                Fotografía analógica
              </NavLink>
            </li>
          </ul>
          {(carrito.length !==0) && <CartWidget/>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
