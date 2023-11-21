"use client";
import { useEffect, useState } from "react";
import { obtener_autos } from "@/hooks/Conexion";
import { getToken, getId } from "@/hooks/SessionUtil";
import Link from "next/link";
const Obtener_autos = () => {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      const id = getId();
      const response = await obtener_autos('index.php?funcion=listar_auto_user&external=' + id, token);
      console.log(response);
      setRespuesta(response.datos);
    };

    if (typeof window !== 'undefined') {
      fetchData();
    }
  }, []);

  return (
    <div>
      {respuesta.map((dato, i) => (
        <div className="col-4" key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={dato.foto} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Auto {i + 1}</h5>
              <p className="card-text">{dato.descripcion}</p>
              <Link href={"#"} className="btn btn-primary">Modificar</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Obtener_autos;