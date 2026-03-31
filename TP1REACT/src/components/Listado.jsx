import React from "react";
import Cita from "./Cita";
import Titulo from "./Titulo";

export default function Listado({ citas }) {
  return (
    <>
      <Titulo titulo="Administra tus citas" />
      {citas?.map((cita) => (
        <Cita objeto={cita} />
      ))}
    </>
  );
}
