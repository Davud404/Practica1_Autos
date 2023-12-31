import Link
 from "next/link";
export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/autos" className="nav-link active" aria-current="page">Autos</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/marcas" className="nav-link active" aria-current="page">Marcas</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}