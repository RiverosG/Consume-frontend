import React from "react";
import CardProducto from "./CardProducto";
import "./ProductosPorCategoria.css";

const productossel = {
  Alimentos: [
    {
      nombre: "Pack Galletas Oreo",
      precio: 10.5,
      imagen: "/assets/galletas-oreo.jpg",
      descuento: 5,
    },
    {
      nombre: "Leche Gloria 1L",
      precio: 4.2,
      imagen: "/assets/leche-gloria.jpg",
      descuento: null,
    },
  ],
  Bebidas: [
    {
      nombre: "Gaseosa Coca-Cola 3L",
      precio: 9.5,
      imagen: "/assets/coca-cola.jpg",
      descuento: 10,
    },
    {
      nombre: "Agua Cielo 1.5L",
      precio: 2.5,
      imagen: "/assets/agua-cielo.jpg",
      descuento: null,
    },
  ],
};

const ProductosPorCategoria = ({ categoriaSeleccionada }) => {
  const productos = productossel[categoriaSeleccionada] || [];

  return (
    <div className="productos-container">
      {productos.length > 0 ? (
        productos.map((producto, index) => (
          <CardProducto
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            descuento={producto.descuento}
          />
        ))
      ) : (
        <p className="sin-productos">
          No hay productos disponibles para esta categoría.
        </p>
      )}
    </div>
  );
};

export default ProductosPorCategoria;
