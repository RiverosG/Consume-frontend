import React, { useState } from "react";
import Header from "../Components/Header"
import Landing from "../Components/Landing"
import ProductosPorCategoria from "../Components/ProductosPorCategoria";

const MainPage = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Alimentos");
  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria); 
  };

  return (
    <div>
        <Header onCategoriaSeleccionada={handleCategoriaSeleccionada} />
        <Landing/>
        {categoriaSeleccionada && (
        <ProductosPorCategoria categoriaSeleccionada={categoriaSeleccionada} />
      )}
    </div>
  )
}
export default MainPage

