import Link from 'next/link'
import Image from 'next/image'
import devHomepage from '../../assets/img/DevHome.svg'

export default function HomeIndex() {
    return (
        <div className="centerHome">
            <div className="page-header-ui-content pt-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 text-light">
                            <h1><span className="underlineAmarelo">Novas</span> soluções para novos tempos</h1>
                            <p className="page-header-ui-text mb-5">Bem vindo a Phog Tech Solutions. Aqui, vamos te ajudar com o que
                                precisa! Nossa equipe é especializada em desenvolvimento web. Somos uma boa escolha caso queira seu site
                                funcionando com agilidade.</p>
                            <Link href="/projects-services">
                                <a className="btn-lg btn btn-warning" id="btnConhecer">
                                    Conhecer
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block"><Image
                            className="img-fluid" src={devHomepage} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}