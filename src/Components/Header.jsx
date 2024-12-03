import React, { useState } from "react";
import "../Components/Header.css";

const Header = ({ onCategoriaSeleccionada }) => {
  const [ListaCategoriaAbierta, setListaCategoriaAbierta] = useState(false);

  const actualizarLista = () => {
    setListaCategoriaAbierta(!ListaCategoriaAbierta);
  };

  const handleCategoriaClick = (categoria) => {
    setListaCategoriaAbierta(false); // Cierra el dropdown
    onCategoriaSeleccionada(categoria); // Llama a la función pasada desde el padre
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
                <li onClick={() => handleCategoriaClick("Alimentos")}>Alimentos</li>
                <li onClick={() => handleCategoriaClick("Bebidas")}>Bebidas</li>
                <li onClick={() => handleCategoriaClick("Limpieza")}>Limpieza</li>
                <li onClick={() => handleCategoriaClick("Tecnología")}>Tecnología</li>
                <li onClick={() => handleCategoriaClick("Hogar")}>Hogar</li>
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
