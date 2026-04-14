import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      nombre: "Luna",
      duenio: "Marcos",
      fecha: "2026-04-10",
      hora: "09:30",
      sintomas: "No quiere comer",
    },
    {
      id: 2,
      nombre: "Simba",
      duenio: "Carla",
      fecha: "2026-04-11",
      hora: "11:00",
      sintomas: "Tiene dolor en la pata",
    },
    {
      id: 3,
      nombre: "Mora",
      duenio: "Lucía",
      fecha: "2026-04-12",
      hora: "16:15",
      sintomas: "Control general",
    },
  ]);

  function agregarCita(nuevaCita) {
    setCitas([...citas, nuevaCita]);
  }

  function eliminarCita(id) {
    const confirmar = window.confirm("¿Seguro que querés eliminar esta cita?");
    if (confirmar) {
      const nuevoArray = citas.filter((cita) => cita.id !== id);
      setCitas(nuevoArray);
    }
  }

  return (
    <>
      <h1 className="app-titulo-principal">ADMINISTRADOR DE PACIENTES</h1>

      <div className="container app-contenedor">
        <div className="row">
          <div className="one-half column">
            <Formulario agregarCita={agregarCita} />
          </div>

          <div className="one-half column">
            <Listado citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;