import Link from 'next/link'
import Image from 'next/image'
import MakerLauch from '../../assets/img/maker_launch.svg'
import Koisinhas from '../../assets/img/portfolio/koisinhasdakisy.png'
import MusaDaMente from '../../assets/img/portfolio/musadamente.png'
import BrilhoInfancia from '../../assets/img/portfolio/brilhodainfancia.png'

export default function Projects() {
    return (
        <div id="projects">
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
                </div> <br />
                {/* <div className="row">
                <div className="col-sm-6">
                    <div className="card rounded-0 bg-dark">
                        <div className="card-body text-light">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Image src={Koisinhas}/> <br />
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
                    <br/>
                    <div className="card rounded-0 bg-dark">
                        <div className="card-body text-light">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Image src={MusaDaMente}/> 
                                    <br />
                                    <a>
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="card-title">Musa da Mente</h5>
                                    <p className="card-text">Desenvolvimento de um teste de personalidade. Para mais informações <Link href="https://github.com/Phog-Tech/musa-da-mente"><a>clique aqui</a></Link></p>
                                    <a className="btn btn-md btn-primary fw-500 me-3" id="btnConhecer" href="https://musadamente-com-br.umbler.net/">
                                        Conhecer
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card rounded-0 bg-dark">
                        <div className="card-body text-light">
                            <div className="row">
                                <div className="col-sm-6">
                                    <Image src={BrilhoInfancia}/> <br />
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
            </div> */}
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card bg-02233d text-light">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-warning">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card bg-02233d text-light">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-warning">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}