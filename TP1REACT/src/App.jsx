import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

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

  // Agrega una nueva cita al listado
  function agregarCita(nuevaCita) {
    setCitas([...citas, nuevaCita]);
  }

  // Elimina una cita por id
  function eliminarCita(id) {
    const confirmar = confirm("¿Seguro que querés eliminar esta cita?");
    if (confirmar) {
      const nuevoArray = citas.filter((cita) => cita.id !== id);
      setCitas(nuevoArray);
    }
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
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