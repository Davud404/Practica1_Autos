import Menu from "@/componentes/menu";
import Link from "next/link";

export default async function Autos() {
    //const respuesta = await obtener('index.php?funcion=marcas');
    //const autos = respuesta && respuesta.datos ? respuesta.datos : [];

    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid" style={{ margin: "1%" }}>
                <Link href={"/autos/agregar_auto"} className="btn btn-success">Agregar</Link>
            </div>
        </div>
    )
}
