import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import "./App.css";


function App() {
const [citas, setCitas] = useState(() => {
  const citas1 = localStorage.getItem("citas");
  return citas1 ? JSON.parse(citas1) : [];
});
useEffect(() => {
  localStorage.setItem("citas", JSON.stringify(citas));
}, [citas]);

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