import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function FormularioCompra() {
  const { producto } = useParams(); // Captura el producto desde la URL
  const [formData, setFormData] = useState({
    nombre: "",
    producto: decodeURIComponent(producto), // Asigna el producto recibido
    fecha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Compra realizada con éxito.");
  };

  return (
    <div className="container mt-5">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="producto" className="form-label">
            Producto a Comprar
          </label>
          <input
            type="text"
            className="form-control"
            id="producto"
            name="producto"
            value={formData.producto}
            readOnly // Este campo será solo de lectura
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirmar Compra
        </button>
      </form>
    </div>
  );
}
