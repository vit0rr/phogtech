import Link from 'next/link'

export default function NavbarHome() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar fixed-top">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand text-light"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/PhogLogo.png" alt="logo" width="65px" height="65px" /> Phog Tech</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active text-light" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projects-services">
                                <a className="nav-link">Serviços - Projetos</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contato">
                                <a className="nav-link">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}