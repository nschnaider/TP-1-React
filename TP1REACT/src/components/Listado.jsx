import Cita from "./Cita";
import Titulo from "./Titulo";

export default function Listado({ citas, eliminarCita }) {
  return (
    <>
      <Titulo titulo="Administra tus citas" />

      {citas.length === 0 ? (
        <p>No hay citas cargadas</p>
      ) : (
        citas.map((cita) => (
          <Cita
            key={cita.id}
            objeto={cita}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </>
  );
}