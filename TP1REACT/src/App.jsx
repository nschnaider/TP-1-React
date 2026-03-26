import { useState } from "react";
import "./App.css";

function App() {
  const [citas] = useState([
    {
      id: 1,
      mascota: "Rocky",
      duenio: "Juan",
      fecha: "2026-04-01",
      hora: "09:30",
      sintomas: "Dolor en la pata",
    },
    {
      id: 2,
      mascota: "Milo",
      duenio: "Carla",
      fecha: "2026-04-02",
      hora: "11:00",
      sintomas: "No quiere comer",
    },
    {
      id: 3,
      mascota: "Nala",
      duenio: "Pedro",
      fecha: "2026-04-03",
      hora: "15:45",
      sintomas: "Revisión general",
    },
  ]);

  return (
    <div className="container">
      {}
      <div className="columna">
        <h2>CREAR MI CITA</h2>
        <Formulario />
      </div>

      {}
      <div className="columna">
        <h2>ADMINISTRA TUS CITAS</h2>
        <Listado citas={citas} />
      </div>
    </div>
  );
}

function Formulario() {
  return (
    <div className="form">
      <input placeholder="Nombre Mascota" />
      <input placeholder="Nombre Dueño" />
      <input type="date" />
      <input type="time" />
      <textarea placeholder="Síntomas"></textarea>

      <button>AGREGAR CITA</button>
    </div>
  );
}

function Listado({ citas }) {
  return (
    <div>
      {citas.map((cita) => (
        <Cita key={cita.id} {...cita} />
      ))}
    </div>
  );
}

function Cita({ mascota, duenio, fecha, hora, sintomas }) {
  return (
    <div className="cita">
      <p><b>Mascota:</b> {mascota}</p>
      <p><b>Dueño:</b> {duenio}</p>
      <p><b>Fecha:</b> {fecha}</p>
      <p><b>Hora:</b> {hora}</p>
      <p><b>Síntomas:</b> {sintomas}</p>

      <button className="eliminar">ELIMINAR</button>
    </div>
  );
}

export default App;