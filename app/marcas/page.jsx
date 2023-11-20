import Menu from "@/componentes/menu";
import { obtener } from "@/hooks/Conexion"
import Link from "next/link";

export default async function Marcas() {
    const respuesta = await obtener('index.php?funcion=marcas');
    const marcas = respuesta && respuesta.datos ? respuesta.datos : [];
    
    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid">
                <div style={{ marginLeft: "10%", marginRight:"10%", marginTop:"2%" }}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nro</th>
                                <th>Marca</th>
                                <th>Estado</th>
                                <th>ID</th>
                                {/*  <th>Acciones</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(marcas) && marcas.map((dato, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.estado}</td>
                                    <td>{dato.external_id}</td>
                                    {/* <td>
                                    <div>
                                        <Link href="#" className="btn btn-info">Modificar</Link>
                                        <Link href="#" className="btn btn-danger">Eliminar</Link>
                                    </div>
                                </td>*/}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
