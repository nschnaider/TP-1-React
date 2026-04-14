import { useState } from "react";
import Titulo from "./Titulo";
import "./Formulario.css";

export default function Formulario({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const { nombre, duenio, fecha, hora, sintomas } = formulario;

  function handleChange(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nombre.trim() === "" ||
      duenio.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      nombre,
      duenio,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    setFormulario({
      nombre: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  }

  return (
    <div className="formulario">
      <Titulo titulo="Crear mi Cita" />

      <form className="formulario-form" onSubmit={handleSubmit}>
        <label className="formulario-label">Nombre Mascota</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width formulario-input"
          placeholder="Nombre Mascota"
          value={nombre}
          onChange={handleChange}
        />

        <label className="formulario-label">Nombre Dueño</label>
        <input
          type="text"
          name="duenio"
          className="u-full-width formulario-input"
          placeholder="Nombre dueño de la mascota"
          value={duenio}
          onChange={handleChange}
        />

        <label className="formulario-label">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width formulario-input"
          value={fecha}
          onChange={handleChange}
        />

        <label className="formulario-label">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width formulario-input"
          value={hora}
          onChange={handleChange}
        />

        <label className="formulario-label">Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width formulario-textarea"
          value={sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary formulario-boton">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}