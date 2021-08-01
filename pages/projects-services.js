import HeadContentServices from '../components/HeadContent/HeadServices'
import NavbarServices from '../components/Navbar/NavbarServices'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {

    return (
        <div>
            <HeadContentServices/>
            <NavbarServices/>
            <div className="container">
                <Services/>
                <Projects/>
            </div> <br /><br /><br /><br /><br />
            <Footer/>
        </div>
    )
}