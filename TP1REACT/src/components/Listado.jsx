import Cita from "./Cita";
import Titulo from "./Titulo";
import "./Listado.css";

export default function Listado({ citas, eliminarCita }) {
  return (
    <div className="listado">
      <Titulo titulo="Administra tus citas" />

      {citas.length === 0 ? (
        <p className="listado-vacio">No hay citas cargadas</p>
      ) : (
        citas.map((cita) => (
          <Cita
            key={cita.id}
            objeto={cita}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
}