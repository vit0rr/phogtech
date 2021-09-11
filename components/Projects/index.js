import Image from 'next/image'
import MakerLauch from '../../assets/img/maker_launch.svg'

export default function Projects() {
    return (
        <>
            <div id="projects" className="mt-2">
                <h1 className="display-5 centralizar text-light" id="titleServicos">Projetos</h1>
                <div id="GridProjects">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-4 centerImg">
                                <div className="d-none d-sm-block d-sm-none d-md-block img-fluid"><Image src={MakerLauch} /></div>
                            </div>
                            <div className="col-md-8 text-light"> <p>
                                Nosso time já realizou com sucesso o desenvolvimento de diversos websites
                                e conseguiu indexa-los corretamente no Google trazendo mais visitantes e vendas para nossos
                                clientes, a seguir vai uma lista e um portfólio dos trabalhos realizados pela nossa equipe.
                            </p>
                                <br /> <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-2">
                <div className="col-sm-6">
                    <div className="card bg-0c5187 text-light">
                        <div className="card-body">
                            <h5 className="card-title"><u>Koisinhas da Kisy</u></h5>
                            <p className="card-text">Loja Virtual onde além da configuração, resolvemos bugs envolvendo responsividade e funcionalidade.</p>
                            <a href="https://www.koisinhasdakisy.com.br/" target="_blank" className="btn btn-warning">Visitar</a>
                        </div>
                    </div>
                </div>
                <div id="paddingTopCards" className="col-sm-6">
                    <div className="card bg-0c5187 text-light">
                        <div className="card-body">
                            <h5 className="card-title"><u>Musa da Mente</u></h5>
                            <p className="card-text">Site que gera e envia relatório de personalidade baseado em suas respostas.</p>
                            <a href="https://github.com/Phog-Tech/musa-da-mente" target="_blank" className="btn btn-warning">Visitar</a>
                        </div>
                    </div>
                </div>
                <div id="paddingTopCards" className="col-sm-6 pt-1">
                    <div className="card bg-0c5187 text-light">
                        <div className="card-body">
                            <h5 className="card-title"><u>Brilho da Infância</u></h5>
                            <p className="card-text">Loja Virtual onde configuramos a venda, domínio e produtos.</p>
                            <a href="https://www.brilhodainfancia.com.br/" target="_blank" className="btn btn-warning">Visitar</a>
                        </div>
                    </div>
                </div>
                <div id="paddingTopCards" className="col-sm-6 pt-1">
                    <div className="card bg-0c5187 text-light">
                        <div className="card-body">
                            <h5 className="card-title"><u>Agro bom Comércio</u></h5>
                            <p className="card-text">Loja desenvolvida do zero com HTML, CSS, JavaScript e PHP.</p>
                            <a href="https://github.com/Phog-Tech/agro-bom-comercio" target="_blank" className="btn btn-warning">Visitar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}