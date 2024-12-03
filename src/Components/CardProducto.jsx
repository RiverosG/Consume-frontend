import React from "react";
import "./CardProducto.css";

const CardProducto = ({ nombre, precio, imagen, descuento }) => {
  return (
    <div className="card-producto">
      {descuento && <div className="descuento">{`-${descuento}%`}</div>}
      <img src={imagen} alt={nombre} className="imagen-producto" />
      <h3 className="nombre-producto">{nombre}</h3>
      <p className="precio-producto">
        <span>Precio Online:  </span>
        <strong>S/{precio}</strong>
      </p>
      <button className="boton-agregar">AGREGAR</button>
    </div>
  );
};

export default CardProducto;
