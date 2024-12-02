import React, { useState } from "react";
import "../Components/Header.css";

const Header = () => {
  const [ListaCategoriaAbierta, setListaCategoriaAbierta] = useState(false);

  const actualizarLista = () => {
    setListaCategoriaAbierta(!ListaCategoriaAbierta);
  };

  return (
    <>
      <div className="Header-container">
        <div className="container-logo">
          <h1>CONSUME</h1>
        </div>
        <div className="categorias-container">
          <button className="categories" onClick={actualizarLista}>
            CATEGORIAS <span className="arrow">›</span>
          </button>
          {ListaCategoriaAbierta && (
            <div className="dropdown">
              <ul>
                <li>Alimentos</li>
                <li>Bebidas</li>
                <li>Limpieza</li>
                <li>Tecnología</li>
                <li>Hogar</li>
              </ul>
            </div>
          )}
        </div>
        <div className="icons">
          <i className="icon box">Mis Compras</i>
          <i className="icon cart">Carrito</i>
          <i className="icon user">Iniciar Sesión</i>
        </div>
      </div>
    </>
  );
};

export default Header;
