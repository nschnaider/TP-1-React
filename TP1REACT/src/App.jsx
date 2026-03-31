import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

const list = [
  {
    nombre: "martin",
    duenio: "el dueño",
    fecha: "10/10/2026",
    hora: "10:00",
    sintomas: "le duele el pie",
  },
  {
    nombre: "martin",
    duenio: "el dueño",
    fecha: "10/10/2026",
    hora: "10:00",
    sintomas: "le duele el pie",
  },
  {
    nombre: "martin",
    duenio: "el dueño",
    fecha: "10/10/2026",
    hora: "10:00",
    sintomas: "le duele el pie",
  },
];

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Formulario />
          </div>
          <div class="one-half column">
            <Listado citas={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
