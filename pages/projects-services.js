import styled from 'styled-components'
import Head from 'next/head'


export default function Home() {
  
  return (
    <div>
      <Head>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/vit0rr/phogtech/32491c044ce4fe189378b41eb391d30cfd2fee02/assets/img/logoPhogSvg.svg" type="image/x-icon"></link>
    <title>Phog Tech - Serviços e Projetos</title>
</Head>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/bcdd673ea4632befda48b5c86c2494dffe4b6a29/assets/img/logoPhogSvg.svg" alt="logo" width="65px"/>
                Phog Tech</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Serviços - Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contato">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div id="services">
            <h1 class="display-5 centralizar" id="titleServicos">Serviços</h1>
            <div id="GridProjects">
                <div class="row">
                    <div class="col-md-8"> <p>
                      A Phog Tech trabalha no ramo de desenvolvimento e otimização de sites e
                        sistemas, oferecemos um leque de serviços para a sua empresa e e-commerce, com os frameworks e
                        plataformas mais modernas podemos realizar:
                    </p>
                        <ul>
                            <li>Otimização e configuração de SEO</li>
                            <li>Criação e Design de sites e E-commerce</li>
                            <li>Identidade Visual</li>
                        </ul>
                        <p>
                          Para informações de contato clique <a href="./contato.html">aqui</a>
                        </p>
                    </div>
                    <div class="col-md-4 centerImg"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/bcdd673ea4632befda48b5c86c2494dffe4b6a29/assets/img/services.svg" width="500px"
                            class="d-none d-sm-block d-sm-none d-md-block img-fluid"
                            id="responsiveImgServices"/>
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
        <div id="projects">
            <h1 class="display-5 centralizar" id="titleServicos">Projetos</h1>
            <div id="GridProjects">
                <div class="row">
                    <div class="row">
                        <div class="col-md-4 centerImg">
                            <img src="https://raw.githubusercontent.com/vit0rr/phogtech/bcdd673ea4632befda48b5c86c2494dffe4b6a29/assets/img/projects.svg"
                                class="d-none d-sm-block d-sm-none d-md-block img-fluid"
                                width="300px" alt="" id="responsiveImgProjects"/>
                        </div>
                        <div class="col-md-8"> <p>
                          Nosso time já realizou com sucesso o desenvolvimento de diversos websites
                            e conseguiu indexa-los corretamente no Google trazendo mais visitantes e vendas para nossos
                            clientes, a seguir vai uma lista e um portfólio dos trabalhos realizados pela nossa equipe.
                        </p>
                            <br/> <br/>
                        </div>
                    </div>
                </div> <br/>
                <div class="row">
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-sm-6">
                                <img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/portfolio/koisinhasdakisy.png" alt="" class="img-fluid" /> <br/>
                              <a>
                              </a>
                              </div>
                              <div class="col-sm-6">
                                <h5 class="card-title">Koisinhas da Kisy</h5>
                                <p class="card-text">Construção de um e-commerce, manutenção de bugs e SEO.</p>
                                <a class="btn btn-md btn-primary fw-500 me-3" id="btnConhecer" href="https://www.koisinhasdakisy.com.br/">
                                Conhecer
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <img src="https://raw.githubusercontent.com/vit0rr/phogtech/main/assets/img/portfolio/brilhodainfancia.png" alt="" class="img-fluid"/> <br/>
                                    <a>
                                  </a>
                                  </div>
                                  <div class="col-sm-6">
                                    <h5 class="card-title">Brilho da Infância</h5>
                                    <p class="card-text">Desenvolvimento e manutenção do e-commerce, como entrega e pagamento.</p>
                                    <a class="btn btn-md btn-primary fw-500 me-3" id="btnConhecer" href="https://www.brilhodainfancia.com.br/">
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
    </div> <br/><br/><br/><br/><br/> 
    <footer>
        <div class="container">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <span id="footerCopy">Copyright © 2021 - Phog Tech</span>
                    </div>
                    <div class="col-sm">
                        <span id="footerIcons"><a href="https://github.com/vit0rr" target="_blank" rel="noopener noreferrer"><i
                                    class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/vitor-souza-397259206/" target="_blank" rel="noopener noreferrer"><i
                                    class="fab fa-linkedin"></i></a></span>
                    </div>
                    <div class="col-sm">
                        <span id="devPor">Desenvolvido por</span> <span id="devName">Vitor Souza</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}
