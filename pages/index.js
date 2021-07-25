import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'
import devHomepage from '../assets/img/devHomepage.svg'
import Link from 'next/link'

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
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/vit0rr/phogtech/32491c044ce4fe189378b41eb391d30cfd2fee02/assets/img/logoPhogSvg.svg" type="image/x-icon"></link>
</Head>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      <Link href="/">
      <a className="navbar-brand"><img src="https://raw.githubusercontent.com/vit0rr/phogtech/c73b17ffe2b84060b10e71f28df636e5c2d3b061/assets/img/logoPhogSvg.svg" alt="logo" width="65px"/> Phog Tech</a>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link href="/">
            <a className="nav-link active" aria-current="page">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects-services">
             <a className="nav-link">Serviços - Projetos</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="./contato">
              <a className="nav-link">Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="centerHome">
    <div class="page-header-ui-content pt-5">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <h1><span class="underlineAmarelo">Novas</span> soluções para novos tempos</h1>
            <p class="page-header-ui-text mb-5">Bem vindo a Phog Tech Solutions. Aqui, vamos te ajudar com o que
              precisa! Nossa equipe é especializada em desenvolvimento web. Somos uma boa escolha caso queira seu site
              funcionando com agilidade.</p>
            <a class="btn btn-lg btn-primary fw-500 me-3" id="btnConhecer" href="./nos.html">
              Conhecer
            </a>
          </div>
          <div class="col-lg-6 d-none d-lg-block"><Image
              class="img-fluid" src={devHomepage}/></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
