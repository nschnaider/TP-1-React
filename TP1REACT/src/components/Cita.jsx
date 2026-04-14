import "./Cita.css";

export default function Cita({ objeto, eliminarCita }) {
  const { id, nombre, duenio, fecha, hora, sintomas } = objeto;

  return (
    <div className="cita">
      <p>
        Mascota: <span>{nombre}</span>
      </p>
      <p>
        Dueño: <span>{duenio}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Síntomas: <span>{sintomas}</span>
      </p>

      <button
        className="button cita-eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar ×
      </button>
    </div>
  );
}