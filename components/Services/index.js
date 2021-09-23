import Link from 'next/link'

export default function Services() {
    return (
        <>
            <div id="services" className="pt-5">
                <h1 className="display-5 centralizar pt-5" id="titleServicos">Serviços</h1>
                <div id="GridProjects">
                    <div className="row">
                        <div className="col-md-8"> <p>
                            A Phog Tech trabalha no ramo de desenvolvimento e otimização de sites e
                            sistemas, oferecemos um leque de serviços para a sua empresa e e-commerce, com os frameworks e
                            plataformas mais modernas podemos realizar:
                        </p>
                            <ul id="service-list">
                                <li>Otimização e configuração de SEO</li>
                                <li>Criação e Design de sites e E-commerce</li>
                                <li>Identidade Visual</li>
                            </ul>
                            <p>
                                Para informações de contato clique <Link href="/contato"><a className="text-warning">aqui</a></Link>
                            </p>
                        </div>
                        <div className="col-md-4 centerImg"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/flame-brain-research.png" width="500px"
                            className="d-none d-sm-block d-sm-none d-md-block img-fluid"
                            id="responsiveImgServices" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="responsiveSvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none"
                    fill="currentColor">
                    <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                </svg>
            </div>
        </>
    )
}