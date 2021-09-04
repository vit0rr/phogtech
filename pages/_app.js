import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
    background-color: #011627;
}

body {
    padding: 0;
    margin: 0;
}

p {
    font-size: 20px;
}

#GridProjects {
    margin-top: 20px;
}

#titleServicos {
    text-decoration: underline #FFAD00;
}

#services {
    color: white;
    padding: 70px;
    background-color: #16456b;
}

#projects {
    padding: 70px;
}

.centralizar {
    text-align: center;
}

#responsiveSvg {
  color: #011627; 
  //background-color: #16456b;
 //border: 1px solid #011627;
}

#imgKisy{
  border-radius: 5px;
}

#imgInfancia {
  border-radius: 5px;
}

/*Landingpage*/
.centerHome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50% );
    width: 100%;
}

#btnConhecer {
    background-color: #FFAD00;
    color: white;
    font-weight: bold;
    border: 0px;
}

#btnConhecer:hover {
    background-color: #db8c23;
    color: white;
    font-weight: bold;
    border: 0px;
}

.underlineAmarelo {
    text-decoration: underline #FFAD00;
}

/*navbar*/
ul > li > a:hover{
    text-decoration: underline #FFAD00 2px;
    transition: 0.3s;
    transform: translateX(0) scale(1.1);
}

nav {
    border-bottom: 2px solid #FFAD00;
}

.bg-navbar {
    background-color: #02233d;
}

#contatovH {
    height: 100vh;
}

#contact {
    color: white;
    border-radius: 5px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #02233d;
}

.bg-02233d {
    background-color: #02233d;
}

.bg-0c5187 {
    background-color: #0c5187;
}

div.row > div.col-md-8 > p > a {
    text-decoration: underline #FFAD00 2px;
}

div.container > div#projects > div#GridProjects > div.row > div.col-sm-6 {
    margin-top: 5px;
}

#service-list {
    font-size: 18px;
}

/*Footer*/
footer {
    display: none;
    background-color: #02233d;
    text-align: center;
    color: white;
    font-size: 17px;
    padding: 10px;
}

#footerIcons > a > i{
    padding: 5px;
    font-size: 25px;
    color: white;
}

div.row > div.col-sm > span#footerCopy {
    font-weight: 500;
}

div.row > div.col-sm > span#devPor {
    font-weight: 500;
}

div.row > div.col-sm > span#devName {
    text-decoration: underline;
}

#borderContact {
    border-right: 1px solid white;
}

/* Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) { 
    #services {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #projects {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #responsiveSvg {
        display: none;
    }

    #borderContact {
        border-right: 0px solid black;
    }

    #paddingTopCards {
        padding-top: 5px;
    }
 }

/* Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px) { 
    #projects {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #services {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #responsiveSvg {
        display: none;
    }

    #borderContact {
        border-right: 0px solid black;
    }

    #paddingTopCards {
        padding-top: 5px;
    }
 }

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) { 
    #projects {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #services {
        padding: 4px;
        background-color: #02233d;
        border-radius: 10px;
    }

    #responsiveSvg {
        display: none;
    }

    #borderContact {
        border-right: 0px solid black;
    }
 }

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) { 
    /*nhe*/
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    /*nhe*/
 }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

NProgress.configure({ showSpinner: false })

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
            {/* Import CSS for nprogress */}
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
