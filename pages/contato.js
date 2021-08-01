import NavbarContact from '../components/Navbar/NavbarContact'
import Contact from '../components/Contact'
import HeadContentContact  from '../components/HeadContent/HeadContact'
import Footer from '../components/Footer'

export default function Home() {

    return (
        <div>
            <HeadContentContact/>
            <NavbarContact/>
            <Contact/>
            <br/><br/>
            <Footer/>
        </div>
    )
}
