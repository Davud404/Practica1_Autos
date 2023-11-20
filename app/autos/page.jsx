import Menu from "@/componentes/menu";
import Obtener_autos from "@/componentes/obtener_autos";
import Link from "next/link";

export default async function Autos() {

    return (
        <div className="row">
            <Menu></Menu>
            <div className="container-fluid" style={{ margin: "1%" }}>
                <Link href={"/autos/agregar_auto"} className="btn btn-success">Agregar</Link>
                <Obtener_autos></Obtener_autos>
                
            </div>
        </div>
    )
}
