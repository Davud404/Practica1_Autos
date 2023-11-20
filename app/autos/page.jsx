import Menu from "@/componentes/menu";
import { obtener } from "@/hooks/Conexion"
import Link from "next/link";

export default async function Autos() {
    //const respuesta = await obtener('index.php?funcion=marcas');
    //const autos = respuesta && respuesta.datos ? respuesta.datos : [];

    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid">
                <p>Aqui se muestran los carros</p>
            </div>
        </div>
    )
}
