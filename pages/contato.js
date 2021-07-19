import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import devHomepage from '../assets/img/devHomepage.svg'

export default function Home() {
  
  return (
    <div>
      <Head>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
    <title>Phog Tech - Home</title>
</Head>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="./index.html"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/bcdd673ea4632befda48b5c86c2494dffe4b6a29/assets/img/logoPhogSvg.svg" alt="logo" width="65px"/>
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
                        <a class="nav-link" href="/projects-services">Serviços - Projetos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<div class="container" id="contatovH">
            <br/>
            <section id="contact">
                <div>
                    <h1 class="display-5 centralizar" id="titleServicos">Contato</h1>
                    <div class="page-header-ui-content pt-5">
                        <div class="container px-5">
                          <div class="row gx-5 align-items-center">
                            <div class="col-lg-6" id="borderContact">
                              <h4>Phog Tech:</h4>
                              <p class="page-header-ui-text mb-5">Caso queira conversar conosco, temos o email da Phog Tech: <br/><a href="mailto:phogtechcontato@gmail.com">phogtechcontato@gmail.com</a></p>
                                <h4>Equipe:</h4>
                                <p>
                                    Você também pode chamar individualmente nossa equipe caso prefira:
                                </p>
                                <ul>
                                    <li>Felipe Murata <a href="mailto:felipe.murata10@gmail.com">felipe.murata10@gmail.com</a></li>
                                    <li>Pedro Caires <a href="mailto:pedrogcs0104@gmail.com">pedrogcs0104@gmail.com</a></li>
                                    <li>Vitor Souza <a href="mailto:vi.souza.almeida@protonmail.com">vi.souza.almeida@protonmail.com</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 d-none d-lg-block"><img
                                class="img-fluid" src="https://raw.githubusercontent.com/vit0rr/phogtech/de9b21d0d14149bd148740452add474699d6b3d1/assets/img/delivery_address.svg"/></div>
                          </div>
                        </div>
                      </div>
                </div>
            </section>
        </div>
        <br/>
    
    <br/>
    <footer>
        <div class="container">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <span id="footerCopy">Copyright © 2021 - Phog Tech</span>
                    </div>
                    <div class="col-sm">
                        <span id="footerIcons"><a href="https://github.com/vit0rr" target="_blank"
                                rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/vitorsalmeida/" target="_blank"
                                rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></span>
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
