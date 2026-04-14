import { useState } from "react";
import Titulo from "./Titulo";

export default function Formulario({ agregarCita }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    duenio: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const { nombre, duenio, fecha, hora, sintomas } = formulario;

  // Actualiza el estado cada vez que el usuario escribe
  function handleChange(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  // Maneja el envío del formulario
  function handleSubmit(e) {
    e.preventDefault();

    // Validación simple
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

    // Creamos la nueva cita con id único
    const nuevaCita = {
      id: Date.now(),
      nombre,
      duenio,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    // Limpiamos el formulario
    setFormulario({
      nombre: "",
      duenio: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  }

  return (
    <>
      <Titulo titulo="Crear mi Cita" />

      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={nombre}
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="duenio"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={duenio}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          value={fecha}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={hora}
          onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
} 