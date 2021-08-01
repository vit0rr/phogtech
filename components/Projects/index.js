export default function Projects(){
    return (
        <div id="projects">
        <h1 className="display-5 centralizar" id="titleServicos">Projetos</h1>
        <div id="GridProjects">
            <div className="row">
                <div className="row">
                    <div className="col-md-4 centerImg">
                        <img src="https://raw.githubusercontent.com/vit0rr/phogtech/bcdd673ea4632befda48b5c86c2494dffe4b6a29/assets/img/projects.svg"
                            className="d-none d-sm-block d-sm-none d-md-block img-fluid"
                            width="300px" alt="" id="responsiveImgProjects" />
                    </div>
                    <div className="col-md-8"> <p>
                        Nosso time já realizou com sucesso o desenvolvimento de diversos websites
                        e conseguiu indexa-los corretamente no Google trazendo mais visitantes e vendas para nossos
                        clientes, a seguir vai uma lista e um portfólio dos trabalhos realizados pela nossa equipe.
                    </p>
                        <br /> <br />
                    </div>
                </div>
            </div> <br />
            <div className="row">
                <div className="col-sm-6">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/portfolio/koisinhasdakisy.png" alt="" className="img-fluid" /> <br />
                                    <a>
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="card-title">Koisinhas da Kisy</h5>
                                    <p className="card-text">Construção de um e-commerce, manutenção de bugs e SEO.</p>
                                    <a className="btn btn-md btn-primary fw-500 me-3" id="btnConhecer" href="https://www.koisinhasdakisy.com.br/">
                                        Conhecer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/portfolio/brilhodainfancia.png" alt="" className="img-fluid" /> <br />
                                    <a>
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="card-title">Brilho da Infância</h5>
                                    <p className="card-text">Desenvolvimento e manutenção do e-commerce, como entrega e pagamento.</p>
                                    <a className="btn btn-md btn-primary fw-500 me-3" id="btnConhecer" href="https://www.brilhodainfancia.com.br/">
                                        Conhecer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}