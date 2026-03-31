export default function Cita({ objeto }) {
  const { nombre, duenio, fecha, hora, sintomas } = objeto;
  return (
    <div class="cita">
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
              Sintomas: <span>{sintomas}</span>
      </p>
      <button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  );
}
